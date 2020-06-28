const { loginData } = require('./mockData');

module.exports = function reqMock(app) {
  app.post('/api/login.ajax', (req, res) => {
    res.send({ ...loginData });
  });
};

