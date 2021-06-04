import * as Mongoose from 'mongoose';
//import { UserModel } from './users/users.model';
import { EmployeeModel } from './employees/employees.model';

let database: Mongoose.Connection;

export const connect = () => {
  // add your own uri below
  const uri =
    'mongodb://localhost:27017/UserDB';

  if (database) {
    return;
  }

  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;

  database.once('open', async () => {
    console.log('Connected to database');
  });

  database.on('error', () => {
    console.log('Error connecting to database');
  });

  return {
    EmployeeModel
  };
};

export const disconnect = () => {
  if (!database) {
    return;
  }

  Mongoose.disconnect();
};
