import { Document } from "mongoose";
import { IEmployeeDocument } from "./employees.types";

export async function setLastUpdated(this: IEmployeeDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}
export async function sameLastName(this: IEmployeeDocument): Promise<Document[]> {
  return this.model("employee").find({ lastName: this.lastName });
}
