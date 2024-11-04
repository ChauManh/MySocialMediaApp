const authRouter = require('./auth');

function router(app) {
  app.use('/auth', authRouter); // Cấu hình cho route auth
}

module.exports = router;
