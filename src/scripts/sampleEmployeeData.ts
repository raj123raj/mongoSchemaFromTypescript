import { EmployeeModel } from "../database/employees/employees.model";
import { connect, disconnect } from "../database/database";

(async () => {
  connect();

  const employees = [
    { firstName: "Rachel", lastName: "Green", age: 25, gender: "Female", department: "Design" },
    { firstName: "Monica", lastName: "Geller", age: 25, gender: "Female", department: "Catering" },
    { firstName: "Phebe", lastName: "Phebe", age: 25, gender: "Female", department: "Masus" },
    { firstName: "Ross", lastName: "Geller", age: 30, gender: "Male", department: "Paleontology" },
    { firstName: "Chandler", lastName: "Bing", age: 30, gender: "Male", department: "IT" },
    { firstName: "Joey", lastName: "Joey", age: 30, gender: "Male", department: "Dramatist" },
  ];

  try {
    for (const employee of employees) {
      await EmployeeModel.create(employee);
      console.log(`Created employee ${employee.firstName} ${employee.lastName}`);
    }

    disconnect();
  } catch (e) {
    console.log(e);
  }
})();
