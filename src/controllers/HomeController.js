let getMap = async (req, res) => {
  return res.render('map');
};

let getHomePage = async (req, res) => {
  return res.render('index');
};

let getAllBin = async (req, res) => {
  return res.render('bins');
};

let getAllVehicle = async (req, res) => {
  return res.render('vehicles');
};

let getAllDriver = async (req, res) => {
  return res.render('drivers');
};


export default {
  getMap,
  getHomePage,
  getAllBin,
  getAllVehicle,
  getAllDriver, 
};
