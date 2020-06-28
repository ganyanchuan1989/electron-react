const { loginData } = require('./mockData');

module.exports = function reqMock(app) {
  app.post('/api/login.json', (req, res) => {
    res.send({ ...loginData });
  });
};

