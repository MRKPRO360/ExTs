import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(process.cwd(), 'config.env'),
});

export default {
  port: process.env.PORT,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_URL,
};
