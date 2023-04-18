module.exports = {
const viewAllEmployees= ()=> {
  const sql = `
  SELECT employee.id,
  employee.firstName,
  employee.lastName,
  roles.title,
  department.departmentName,
  roles.salary
  FROM employee, roles, department
  WHERE department.id = roles.departmentId
  AND roles.id = employee.rolesId
  ORDER BY employee.id ASC`;

server.query(sql, (error, res) => {
  console.log("error", error);
  if (error) throw error;
  console.log("=======================================================");
  console.log(`                    current employees`);
  console.log("=======================================================");
  console.table(res);
  console.log("=======================================================");
  promptUser();
});
}
}