const authRouter = require('./auth');

function router(app) {
  app.use('/auth', authRouter); // Cấu hình cho route signup
}

module.exports = router;
