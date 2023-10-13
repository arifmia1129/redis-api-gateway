import { Server } from 'http';
import app from './app';
import config from './config';
import logger from './shared/logger';

async function startServer() {
  const server: Server = app.listen(config.port, () => {
    logger.info(`Server running on port ${config.port}`);
  });

  // Handle server closing gracefully
  const closeServer = () => {
    server.close(() => {
      logger.info('Server closed');
      process.exit(0); // Change this to 0 to indicate a successful exit
    });
  };

  // Handle unexpected errors
  const handleUnexpectedError = (error: unknown) => {
    logger.error(error);
    closeServer();
  };

  process.on('uncaughtException', handleUnexpectedError);
  process.on('unhandledRejection', handleUnexpectedError);

  // Handle SIGTERM signal
  process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    closeServer();
  });
}

startServer();
