
const { defineConfig } = require("@vue/cli-service");
const { ProvidePlugin } = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = defineConfig({
  transpileDependencies: ["@vueform"],
  lintOnSave: false,

  configureWebpack: (config) => {
    config.devtool = "source-map";
    config.resolve.symlinks = false;
    config.resolve.fallback = {
      fs: false,
      path: false,
      crypto: false, // crypto-browserify can be polyfilled here if needed
      stream: require.resolve("stream-browserify"),
      assert: false, // assert can be polyfilled here if needed
      os: false, // os-browserify can be polyfilled here if needed
      https: false, // https-browserify can be polyfilled here if needed
      http: false, // stream-http can be polyfilled here if needed
      url: false, // url can be polyfilled here if needed
      zlib: false, // browserify-zlib can be polyfilled here if needed
      timers: require.resolve("timers-browserify"),
      querystring: require.resolve("querystring-es3")
      //path: require.resolve("path-browserify")
    };
    config.plugins.push(new ProvidePlugin({ Buffer: ["buffer", "Buffer"] }));
    config.plugins.push(new ProvidePlugin({ process: ["process/browser"] }));
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
      })
    );
  },

  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    },
    options: {
      template: 'public/browser-extension.html',
      entry: './src/options/main.js',
      title: 'Options'
    },
    
    indexx: {
      template: 'public/browser-extension.html',
      entry: './src/main.js',
      title: 'Indexx'
    }
  },

  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
          entries: {
            'content-script': [
              'src/content-scripts/content-script.js'
            ]
          }
        }
      }
    }
  }
});
