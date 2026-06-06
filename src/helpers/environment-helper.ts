import dotenv from 'dotenv';

const environment = process.env.TEST_ENV || 'qa';

dotenv.config({ path: `.env.${environment}` });

export const EnvironmentHelper = {
  baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
  environment
};
