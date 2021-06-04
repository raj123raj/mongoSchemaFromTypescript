import { IEmployeeDocument, IEmployeeModel } from "./employees.types";

export async function findOneOrCreate(
  this: IEmployeeModel,
  {
    firstName,
    lastName,
    age,
    gender,
    department,
  }: { firstName: string; lastName: string; age: number; gender : string; department : string }
): Promise<IEmployeeDocument> {
  const employeeRecord = await this.findOne({ firstName, lastName, age, gender, department });
  if (employeeRecord) {
    return employeeRecord;
  } else {
    return this.create({ firstName, lastName, age, gender, department });
  }
}

export async function findByAge(
  this: IEmployeeModel,
  min?: number,
  max?: number
): Promise<IEmployeeDocument[]> {
  return this.find({ age: { $gte: min || 0, $lte: max || Infinity } });
}
