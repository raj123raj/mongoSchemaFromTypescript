import { connect, disconnect } from "../database/database";

(async () => {
  const db = connect();

  // test static methods
  const twenties = await db.EmployeeModel.findByAge(20, 29);
  const newEmployee = await db.EmployeeModel.findOneOrCreate({
    firstName: "Priya",
    lastName: "Raj",
    age: 47,
    gender: "Female",
    department: "IT",
  });
  const existingEmployee = await db.EmployeeModel.findOneOrCreate({
    firstName: "Rachel",
    lastName: "Green",
    age: 25,
    gender: "Female",
    department: "Design",
  });
  const numOfUsers = (await db.EmployeeModel.find()).length;
  console.log({ twenties, newEmployee, existingEmployee, numOfUsers });

  // test instance methods
  await existingEmployee.setLastUpdated();
  const siblings = await existingEmployee.sameLastName();
  console.log({ siblings });

  disconnect();
})();
