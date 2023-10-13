import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const createBuildingServer = async (req: Request) => {
  const { data } = await CoreService.post('building/create', req.body, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

const getBuildingService = async (req: Request) => {
  const { data } = await CoreService.get('building', {
    params: req.query
  });

  return data;
};

export const BuildingService = {
  createBuildingServer,
  getBuildingService
};
