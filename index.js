const employee = {
	name: 'victor',
	streetAddress: 'thika-road'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
	return{
		...employee,
		[key]: value,
	};
}
const updated = updateEmployeeWithKeyAndValue(employee, "name", "Sam");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  return { ...employee[key] };
}

const newEmployee = deleteFromEmployeeByKey(employee, "name");
delete newEmployee.name;

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
