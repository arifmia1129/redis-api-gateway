import { createClient } from 'redis';
import logger from './logger';
import config from '../config';

const redisClient = createClient({
  url: config.redis.url
});

redisClient.on('error', (err) => logger.error('redis error', err));
redisClient.on('connect', () => logger.info('Redis connected'));

const redisConnect = async () => {
  await redisClient.connect();
};

export default redisConnect;
