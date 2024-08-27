const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");
const reslove = (dir) => path.resolve(__dirname, dir);

const svgRule = {
  test: /\.svg$/i,
  exclude: [/src/, /static/],
  use: [
    {
      loader: "file-loader",
      options: {
        name: "static/[name].[hash:8].[ext]",
      },
    },
  ],
};

const configureWebpackSettings = (config, isServer, utils, content) => {
  /**
   * replace @svgr/webpack config options
   */
  const svgrWebpackOptions = config.module.rules.find((rule) =>
    rule.test.test("a.svg")
  ).oneOf[0].use[0];

  /**
   * 和gw-scripts svgr设置统一
   */
  svgrWebpackOptions.options = {
    ref: true,
    titleProp: true,
    dimensions: false,
    svgo: true,
  };
  return {
    module: {
      rules: [svgRule],
    },
    mergeStrategy: { "devServer.proxy": "replace" },
    devtool: "eval-source-map",
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      }),
      new webpack.DefinePlugin({
        ENV: JSON.stringify("test"),
        CASE: JSON.stringify("goodwe"),
        _doc_: true,
      }),
      new NodePolyfillPlugin(),
    ],
    devServer: {
      proxy: {
        "/api": {
          target: "http://test.secp.192.168.221.97.nip.io",
          secure: false,
          changeOrigin: true,
          cookieDomainRewrite: "localhost",
        },
        "/static/lib": {
          target: "http://test.secp.192.168.221.97.nip.io",
          secure: false,
          changeOrigin: true,
          cookieDomainRewrite: "localhost",
        },
      },
      client: {
        overlay: {
          runtimeErrors: (error) => {
            return (
              error.message !==
              "ResizeObserver loop completed with undelivered notifications."
            );
          },
        },
      },
    },
    resolve: {
      alias: {
        "@": reslove("packages"),
        "@gw/web-visual-components": reslove("./packages"),
        net: false,
        tls: false,
        canvas: false,
      },
    },
    infrastructureLogging: {
      appendOnly: true,
      level: "info",
    },
  };
};

function myPlugin(context, opts) {
  return {
    name: "docusaurus-my-plugin",
    configureWebpack: configureWebpackSettings,
  };
}

module.exports = myPlugin;
