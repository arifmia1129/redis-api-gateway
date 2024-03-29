import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const envVarsZodSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z
    .string()
    .default('3030')
    .refine((val) => Number(val)),
  JWT_SECRET: z.string(),
  REDIS_URL: z.string(),
  AUTH_URL: z.string(),
  CORE_URL: z.string(),
  PAYMENT_URL: z.string()
});

const envVars = envVarsZodSchema.parse(process.env);

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwt: {
    secret: envVars.JWT_SECRET
  },
  redis: {
    url: envVars.REDIS_URL
  },
  url: {
    auth_service: envVars.AUTH_URL,
    core_service: envVars.CORE_URL,
    payment_service: envVars.PAYMENT_URL
  }
};
