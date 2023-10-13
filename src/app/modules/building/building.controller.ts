import { NextFunction, Request, Response } from 'express';
import { BuildingService } from './building.service';
import sendResponse from '../../../shared/response';

const createBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.createBuildingServer(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getBuildingService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BuildingController = {
  createBuilding,
  getBuilding
};
