const GitRevisionPlugin = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = {
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['process.env']['VERSION'] = JSON.stringify(require('./package.json').version);
      args[0]['process.env']['GIT_COMMITHASH'] = JSON.stringify(gitRevisionPlugin.commithash());
      args[0]['process.env']['GIT_BRANCH'] = JSON.stringify(gitRevisionPlugin.branch());
      args[0]['process.env']['GIT_VERSION'] = JSON.stringify(gitRevisionPlugin.version());
      return args
    })
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/views/global.scss";`
      }
    }
  },
  pluginOptions: {
  },
  transpileDependencies: [],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  }
};
