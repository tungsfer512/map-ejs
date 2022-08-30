import userService from '../services/UserService';

let addNewEmployee = async (req, res, next) => {
  let newEmployee = {
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    dob: req.body.dob,
    email: req.body.email,
    phone: req.body.phone,
    image: req.body.image,
  };

  if (
    !newEmployee.username ||
    !newEmployee.password ||
    !newEmployee.firstName ||
    !newEmployee.lastName ||
    !newEmployee.gender ||
    !newEmployee.dob ||
    !newEmployee.email ||
    !newEmployee.phone
  ) {
    return res.status(500).json({
      errCode: 1,
      errMessage: 'Missing inputs value!!!',
    });
  }

  let newEmpployeeData = await userService.handleAddEmployee(newEmployee);

  if (newEmpployeeData.errCode !== 0) {
    return res.status(500).json({
      errCode: newEmpployeeData.errCode,
      errMessage: newEmpployeeData.errMessage,
    });
  }

  return res.status(200).json({
    errCode: newEmpployeeData.errCode,
    errMessage: newEmpployeeData.errMessage,
    employee: newEmpployeeData.employee,
  });
};

let getAllEmployee = async (req, res, next) => {
  let employeesData = await userService.handleGetAllEmployee();

  if (employeesData.errCode !== 0) {
    return res.status(500).json({
      errCode: employeesData.errCode,
      errMessage: employeesData.errMessage,
    });
  }

  return res.status(200).json({
    errCode: employeesData.errCode,
    errMessage: employeesData.errMessage,
    employees: employeesData.employees,
  });
};

let getEmployeeById = async (req, res, next) => {
  let id = req.params.id;

  let employeeData = await userService.handleGetEmployeeById(id);

  if (employeeData.errCode !== 0) {
    return res.status(500).json({
      errCode: employeeData.errCode,
      errMessage: employeeData.errMessage,
    });
  }

  return res.status(200).json({
    errCode: employeeData.errCode,
    errMessage: employeeData.errMessage,
    employee: employeeData.employee,
  });
};

let updateEmployeeById = async (req, res, next) => {
  let id = req.params.id;
  let newInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    dob: req.body.dob,
    email: req.body.email,
    phone: req.body.phone,
    image: req.body.image,
  };

  if (
    !newInfo.firstName ||
    !newInfo.lastName ||
    !newInfo.gender ||
    !newInfo.dob ||
    !newInfo.email ||
    !newInfo.phone ||
    !newInfo.image
  ) {
    return res.status(500).json({
      errCode: 1,
      errMessage: 'Missing input values',
    });
  }

  let employeeData = await userService.handleUpdateEmployeeById(id, newInfo);

  if (employeeData.errCode !== 0) {
    return res.status(500).json({
      errCode: employeeData.errCode,
      errMessage: employeeData.errMessage,
    });
  }

  return res.status(200).json({
    errCode: employeeData.errCode,
    errMessage: employeeData.errMessage,
    employeeBefore: employeeData.employeeBefore,
    employeeAfter: employeeData.employeeAfter,
  });
};

let deleteEmployeeById = async (req, res, next) => {
  let id = req.params.id;

  let employeeData = await userService.handleDeleteEmployeeById(id);

  if (employeeData.errCode !== 0) {
    return res.status(500).json({
      errCode: employeeData.errCode,
      errMessage: employeeData.errMessage,
    });
  }

  return res.status(200).json({
    errCode: employeeData.errCode,
    errMessage: employeeData.errMessage,
    employee: employeeData.employee,
  });
};

export default {
  addNewEmployee,
  getAllEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
};
