import express from 'express';
import HomeController from '../controllers/HomeController';

let homeRouter = express.Router();

homeRouter.use('/home', HomeController.getHomePage);
homeRouter.use('/bins', HomeController.getAllBin);
homeRouter.use('/trucks', HomeController.getAllVehicle);
homeRouter.use('/drivers', HomeController.getAllDriver);
homeRouter.use('/', HomeController.getMap);

export default homeRouter;
