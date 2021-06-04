import { Document, Model } from "mongoose";

export interface IEmployee {
  firstName: string;
  lastName: string;
  age: number;
  dateOfJoining?: Date;
  lastUpdated?: Date;
  gender: String;
  department: String;
}

export interface IEmployeeDocument extends IEmployee, Document {
  setLastUpdated: (this: IEmployeeDocument) => Promise<void>;
  sameLastName: (this: IEmployeeDocument) => Promise<Document[]>;
}

export interface IEmployeeModel extends Model<IEmployeeDocument> {
  findOneOrCreate: (
    this: IEmployeeModel,
    {
      firstName,
      lastName,
      age,
      gender,
      department,
    }: { firstName: string; lastName: string; age: number; gender: string; department: string; }
  ) => Promise<IEmployeeDocument>;
  findByAge: (
    this: IEmployeeModel,
    min?: number,
    max?: number
  ) => Promise<IEmployeeDocument[]>;
}
