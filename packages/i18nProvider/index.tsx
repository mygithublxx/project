import React, { useEffect, useMemo, useState } from "react";
import I18N from "i18next";
import { initReactI18next, setI18n } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import backend from "./libs";
import { I18nContext } from "./context";
import type { TFunction, Callback } from "i18next";
import type { FetchOptions } from "./libs/index";
import type { I18nProviderProps } from "./dto";

setI18n(I18N);
/**
 * i18n上下文组件
 * @deprecated 已迁移，请改为 import { GWI18nProvider, I18N } from "@gw/gw-arch";
 */
const I18nProvider = (props: I18nProviderProps) => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("");
  /**
   * 获取配置项
   */
  const {
    loadPath = "{{lng}}-{{ns}}",
    allowMultiLoading = false,
    multiSeparator = "&",
    addPath = "",
    stringify = JSON.stringify,
    requestOptions = {},
    parse = JSON.parse,
    appName = "common",
    languagesManifestUrl = "https://static-dev.we.goodwe.com/languages/manifest-dev.json",
    defaultNs = "translation",
    fallbackLng = "en",
    debug = process.env.NODE_ENV === "development",
    cookieDomain = "",
  } = props.config || {};

  /**
   * 语言切换回调
   * @param lng
   * @param callback
   * @returns
   */
  const handleChangeLang = (
    lng: string,
    callback?: Callback
  ): Promise<TFunction> =>
    I18N.changeLanguage(lng, (err, t) => {
      setCurrentLanguage(lng);
      callback?.(err, t);
    });
  /**
   * 获取相近的语言key
   */
  const getSimilarLanguage = (
    key: string,
    list: { id: string; name: string; code: string; label: string }[]
  ) => {
    const keys = list.map((m) => m.code);

    if (!keys.length || keys.includes(key)) return key;
    const lngKey = key.split("-")[0];
    let res = lngKey;
    for (const k of keys) {
      if (k.startsWith(lngKey)) {
        res = k;
        break;
      }
    }
    return res;
  };
  /**
   * 服务请求配置
   */
  const backendOptions = useMemo<FetchOptions>(() => {
    return {
      loadPath,
      allowMultiLoading,
      multiSeparator,
      addPath,
      stringify,
      requestOptions,
      parse,
      fetch: async (lngNs: string) => {
        const arr = lngNs.split("-");
        const ns = arr.pop();
        const lng = arr.join("-");

        try {
          setLoading(true);
          const lngManifestJSON = await fetch(languagesManifestUrl, {
            cache: "default",
          }).then((res) => res.json());

          let url = lngManifestJSON[appName][lng];
          let languages = lngManifestJSON?.languageInfo || [];
          setLanguages(languages);
          //当没有命中语言的key,将尝试匹配最相近的语言
          if (!url) {
            const newKey = getSimilarLanguage(lng, languages);
            url = lngManifestJSON[appName][newKey];
          }

          //仍没有匹配到key时，不再发起请求，直接返回error触发fallback;
          if (!url) return new Response("{}");
          const res = await fetch(url, { cache: "force-cache" });

          setLoading(false);
          return res;
        } catch (error) {
          console.error(`Fetch remote i18n ${lng}-${ns} resource error`, error);
          setLoading(false);
          return new Response("{}");
        }
      },
    };
  }, []);

  useEffect(() => {
    if (!I18N) return;

    I18N.use(LanguageDetector)
      .use(initReactI18next)
      .use(backend)
      .init<FetchOptions>(
        {
          ns: [defaultNs],
          defaultNS: defaultNs,
          partialBundledLanguages: true,
          fallbackLng,
          load: "currentOnly",
          debug,
          interpolation: {
            escapeValue: false,
          },
          backend: backendOptions,
          react: {
            useSuspense: true,
          },
          detection: {
            caches: ["cookie"],
            cookieDomain,
            lookupCookie: "lang",
          },
        },
        (error: any, t: TFunction) => {
          if (error) {
            console.error("i18n init error", error);
            return;
          }
          if (debug) {
            console.log("debug start:", t("smart_energy"));
          }
        }
      );
    I18N.changeLanguage();
  }, [I18N, backendOptions]);

  useEffect(() => {
    if (!I18N) return;
    const onLoaded = () => {
      const key = getSimilarLanguage(I18N.language, languages);
      const newKey = languages.map((m) => m.code).includes(key)
        ? key
        : fallbackLng;

      setCurrentLanguage(newKey);
    };
    I18N.on("loaded", onLoaded);
    return () => I18N.off("loaded", onLoaded);
  }, [I18N, languages]);

  return (
    <I18nContext.Provider
      value={{
        i18n: I18N,
        languageInfo: languages,
        loading,
        currentLanguage,
        changeLanguage: handleChangeLang,
      }}
    >
      {props.children}
    </I18nContext.Provider>
  );
};

export default I18nProvider;
export { I18N };
export { useI18n } from "./hook";
