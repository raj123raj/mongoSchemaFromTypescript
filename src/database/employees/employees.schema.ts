import * as Mongoose from "mongoose";
import { findOneOrCreate, findByAge } from "./employees.statics";
import { setLastUpdated, sameLastName } from "./employees.methods";

const EmployeeSchema = new Mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dateOfJoining: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

EmployeeSchema.statics.findOneOrCreate = findOneOrCreate;
EmployeeSchema.statics.findByAge = findByAge;

EmployeeSchema.methods.setLastUpdated = setLastUpdated;
EmployeeSchema.methods.sameLastName = sameLastName;

export default EmployeeSchema;
