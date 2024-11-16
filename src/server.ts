import config from './app/config';
import app from './app';
import mongoose from 'mongoose';

const DB = config.database?.replace('<db_password>', config.password as string);

const connectDB = async () => {
  try {
    await mongoose.connect(DB as string);
    app.listen(config.port, () => {
      console.log(`App is running on port ${config.port}`);
    });
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

connectDB();
