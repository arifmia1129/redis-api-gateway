import express from 'express';
import { RoomController } from './room.controller';

const router = express.Router();

router.post('/', RoomController.createRoom);
router.get('/', RoomController.getRoom);

export const RoomRouter = router;
