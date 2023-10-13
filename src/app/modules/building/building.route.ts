import express from 'express';
import { BuildingController } from './building.controller';

const router = express.Router();

router.post('/', BuildingController.createBuilding);
router.get('/', BuildingController.getBuilding);

export const BuildingRouter = router;
