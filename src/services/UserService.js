import User from '../models/User';

let handleAddEmployee = (newEmployee) => {
  return new Promise(async (resolve, reject) => {
    try {
      let isUsernameExist = await checkUsername(newEmployee.username);
      let isEmailUsed = await checkEmail(newEmployee.email);
      let isPhoneUsed = await checkPhone(newEmployee.phone);
      let newEmployeeData = {};
      if (isUsernameExist) {
        newEmployeeData.errCode = 2;
        newEmployeeData.errMessage =
          'Employee already exists, please choose another one!!!';
      } else if (isPhoneUsed) {
        newEmployeeData.errCode = 3;
        newEmployeeData.errMessage =
          'Phone number already in use, please choose another one!!!';
      } else if (isEmailUsed) {
        newEmployeeData.errCode = 4;
        newEmployeeData.errMessage =
          'Email already in use, please choose another one!!!';
      } else {
        newEmployeeData.errCode = 0;
        newEmployeeData.errMessage = 'OK';
        let Employee = new User(newEmployee);
        await Employee.save();
        newEmployeeData.employee = newEmployee;
        delete newEmployeeData.employee.password;
      }
      resolve(newEmployeeData);
    } catch (err) {
      reject(err);
    }
  });
};

let checkUsername = (username) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = await User.findOne({
        username: username,
      }).exec();
      if (userData) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (err) {
      reject(err);
    }
  });
};
let checkEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = await User.findOne({
        email: email,
      }).exec();
      if (userData) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (err) {
      reject(err);
    }
  });
};
let checkPhone = (phone) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = await User.findOne({
        phone: phone,
      }).exec();
      if (userData) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (err) {
      reject(err);
    }
  });
};

let handleGetAllEmployee = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let employeesData = {};
      let employees = await User.find({});
      employeesData.errCode = 0;
      employeesData.errMessage = 'OK';
      employeesData.employees = employees;
      resolve(employeesData);
    } catch (err) {
      reject(err);
    }
  });
};
let handleGetEmployeeById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let employeeData = {};
      let employee = await User.findById(id).exec();
      if (employee) {
        employeeData.errCode = 0;
        employeeData.errMessage = 'OK';
        employeeData.employee = employee;
      } else {
        employeeData.errCode = 1;
        employeeData.errMessage = 'Employee Not Found!!!';
      }
      resolve(employeeData);
    } catch (err) {
      reject(err);
    }
  });
};
let handleUpdateEmployeeById = (id, newInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      let employeeData = {};
      let employee = await User.findById(id).exec();
      if (employee) {
        employeeData.errCode = 0;
        employeeData.errMessage = 'Updated';
        employeeData.employeeBefore = employee;
        await User.updateOne(
          { _id: id },
          {
            firstName: newInfo.firstName,
            lastName: newInfo.lastName,
            gender: newInfo.gender,
            dob: newInfo.dob,
            email: newInfo.email,
            phone: newInfo.phone,
            image: newInfo.image,
          },
        );
        employeeData.employeeAfter = await User.findById(id).exec();
      } else {
        employeeData.errCode = 1;
        employeeData.errMessage = 'Employee Not Found!!!';
      }
      resolve(employeeData);
    } catch (err) {
      reject(err);
    }
  });
};
let handleDeleteEmployeeById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let employeeData = {};
      let employee = await User.findById(id).exec();
      if (employee) {
        employeeData.errCode = 0;
        employeeData.errMessage = 'Deleted';
        employeeData.employee = employee;
        await User.deleteOne({ _id: id });
      } else {
        employeeData.errCode = 1;
        employeeData.errMessage = 'Employee Not Found!!!';
      }
      resolve(employeeData);
    } catch (err) {
      reject(err);
    }
  });
};

export default {
  handleAddEmployee,
  handleGetAllEmployee,
  handleGetEmployeeById,
  handleUpdateEmployeeById,
  handleDeleteEmployeeById,
};
