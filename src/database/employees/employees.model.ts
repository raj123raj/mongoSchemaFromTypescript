import * as Mongoose from "mongoose";
import EmployeeSchema from "./employees.schema";
import { IEmployeeDocument, IEmployeeModel } from "./employees.types";

export const EmployeeModel = Mongoose.model<IEmployeeDocument>(
  "employee",
  EmployeeSchema
) as IEmployeeModel;
