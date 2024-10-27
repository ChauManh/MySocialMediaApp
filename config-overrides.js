// config-overrides.js
module.exports = function override(config, env) {
  if (env === 'development') {
    config.devServer = {
      setupMiddlewares: (middlewares, devServer) => {
        // Middleware của bạn ở đây
        return middlewares;
      },
    };
  }
  return config;
};
