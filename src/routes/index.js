import homeRouter from './HomeRouter';

const initWebRouter = (app) => {
  app.use('/', homeRouter);
};

module.exports = initWebRouter;
