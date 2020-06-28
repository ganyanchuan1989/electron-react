const proxyMap = {
  '/app/*': {
    target: 'http://localhost:9099/',
    changeOrigin: true,
    ws: false,
  },
  '/api/*': {
    target: 'http://localhost:9099/',
  },
};

module.exports = proxyMap;
