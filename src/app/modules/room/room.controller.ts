import { NextFunction, Request, Response } from 'express';
import { RoomService } from './room.service';
import sendResponse from '../../../shared/response';

const createRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.createRoomService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getRoomService(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const RoomController = {
  createRoom,
  getRoom
};
