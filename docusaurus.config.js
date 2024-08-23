// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const glob = require("glob");
// @ts-ignore
const lightCodeTheme = require("prism-react-renderer/themes/github");
// @ts-ignore
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");
const pkg = require("./package.json");
const myPlugin = require("./my-plugin");

const lessFiles = glob.sync(
  path.resolve(__dirname, "packages/**/*.{less,css}")
);
const lessDemos = glob.sync(path.resolve(__dirname, "demos/**/*.{less,css}"));

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "GW Web Business Components",
  tagline: "前端web公共业务组件",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
  },
  customFields: {
    friendlyLinks: [
      {
        name: "前端基础组件库",
        href: "//dev.secp.basic.cp.192.168.221.97.nip.io/",
      },
      {
        name: "前端文档库",
        href: "//doc.192.168.221.92.nip.io/",
      },
      {
        name: "App基础组件库",
        href: "//dev.secp.app.basic.cp.192.168.221.97.nip.io/",
      },
    ],
  },
  favicon: "img/favicon.ico",
  organizationName: "GoodWe", // Usually your GitHub org/user name.
  projectName: pkg.name, // Usually your repo name.
  markdown: {
    mermaid: true,
  },
  // @ts-ignore
  plugins: [
    "docusaurus-plugin-less",
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        language: ["en", "zh"],
        searchResultLimits: 10,
        searchResultContextMaxLength: 80,
      },
    ],
    myPlugin,
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: pkg.repository.url + "/blob/develop",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          // customCss: require.resolve('./src/style/custom.css'),
          customCss: [
            ...lessFiles,
            ...lessDemos,
            "./src/style/custom.css",
            "./src/style/basic.css",
          ],
        },
      }),
    ],
  ],
  scripts: [
    /** add custom <script /> */
    "/js/index.js",
  ],
  stylesheets: [
    "http://dev.secp.192.168.221.92.nip.io/static/lib/custom-antd-4.24.15.min.css",
    {
      href: "https://static01.we.goodwe.com/static/web-basic-components/1.1.4/index.min.css",
      crossOrigin: "anonymous",
    },
    "/css/override.css",
  ],
  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      navbar: {
        title: "GW Components",
        logo: {
          alt: "My Site Logo",
          src: "img/favicon.ico",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "组件",
          },
          {
            type: "doc",
            docId: "standard",
            position: "left",
            label: "规范",
          },
          // change the href to your repo
          {
            href: pkg.repository.url,
            label: "GitLab",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      sidebar: {
        hideable: true,
      },
      announcementBar: {
        id: "support_us",
        content:
          '我们即将升级Web Business Components 到 3.0 版本,详情请阅读 <a target="_blank" rel="noopener noreferrer" href="http://doc.192.168.221.92.nip.io/docs/designdoc/%E6%A1%86%E6%9E%B62024/business-3.0">业务组件3.0架构设计方案</a>',
        backgroundColor: "#ff9b2acc",
        textColor: "#434343",
        isCloseable: true,
      },
    }),
};

module.exports = config;
