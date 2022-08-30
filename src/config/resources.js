import express from 'express';

let configResources = (app) => {
  app.use(express.static('./src/public'));
  app.use(express.static('./node_modules'));
  app.set('view engine', 'ejs');
  app.set('views', './src/views');
};

export default configResources;
