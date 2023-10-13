import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const createRoomService = async (req: Request) => {
  const { data } = await CoreService.post('room/create', req.body, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return data;
};

const getRoomService = async (req: Request) => {
  const { data } = await CoreService.get('room', {
    params: req.query
  });

  return data;
};

export const RoomService = {
  createRoomService,
  getRoomService
};
