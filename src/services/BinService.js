import Bin from '../models/Bin';
import BinStateLog from '../models/BinStateLog';

let handleAddBin = (newBin) => {
  return new Promise(async (resolve, reject) => {
    try {
      let newBinData = {
        errCode: 0,
        errMessage: 'OK',
        bin: newBin,
      };
      let NEWBIN = new Bin(newBin);
      await NEWBIN.save();
      resolve(newBinData);
    } catch (err) {
      reject(err);
    }
  });
};

let handleGetAllBin = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let binsData = {};
      let bins = await Bin.find({});
      binsData.errCode = 0;
      binsData.errMessage = 'OK';
      binsData.bins = bins;
      resolve(binsData);
    } catch (err) {
      reject(err);
    }
  });
};

let handleGetBinById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let binData = {};
      let bin = await Bin.findById(id).exec();
      if (bin) {
        binData.errCode = 0;
        binData.errMessage = 'OK';
        binData.bin = bin;
      } else {
        binData.errCode = 1;
        binData.errMessage = 'Bin Not Found!!!';
      }
      resolve(binData);
    } catch (err) {
      reject(err);
    }
  });
};

let handleUpdateBinById = (id, newInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      let binData = {};
      let bin = await Bin.findById(id).exec();
      if (bin) {
        binData.errCode = 0;
        binData.errMessage = 'Updated';
        binData.binBefore = bin;
        await Bin.updateOne(
          { _id: id },
          {
            latitude: newInfo.latitude,
            longitude: newInfo.longitude,
            heigth: newInfo.heigth,
            weight: newInfo.weight,
            maxWeight: newInfo.maxWeight,
            status: newInfo.status,
          },
        );
        binData.binAfter = await Bin.findById(id).exec();
      } else {
        binData.errCode = 1;
        binData.errMessage = 'Bin not found!!!';
      }
      resolve(binData);
    } catch (err) {
      reject(err);
    }
  });
};

let handleDeleteBinById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let binData = {};
      let bin = await Bin.findById(id).exec();
      if (bin) {
        binData.errCode = 0;
        binData.errMessage = 'Deleted';
        binData.bin = bin;
        await Bin.deleteOne({ _id: id });
      } else {
        binData.errCode = 1;
        binData.errMessage = 'Bin not found!!!';
      }
      resolve(binData);
    } catch (err) {
      reject(err);
    }
  });
};

let handleAddStateLog = (newState) => {
  return new Promise(async (resolve, reject) => {
    try {
      let newStateLogData = {};
      newStateLogData.errCode = 0;
      newStateLogData.errMessage = 'OK';
      newStateLogData.state = newState;
      let BINSTATE = new BinStateLog(newState);
      await BINSTATE.save();
      resolve(newStateLogData);
    } catch (err) {
      reject(err);
    }
  });
};

let handleGetAllStateLog = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let stateLogsData = {};
      stateLogsData.errCode = 0;
      stateLogsData.errMessage = 'OK';
      stateLogsData.states = await BinStateLog.find({});
      resolve(stateLogsData);
    } catch (err) {
      reject(err);
    }
  });
};

let handleGetStateLogById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let stateLogData = {};
      let state = await BinStateLog.findById(id).exec();
      if (state) {
        stateLogData.errCode = 0;
        stateLogData.errMessage = 'OK';
        stateLogData.state = state;
      } else {
        stateLogData.errCode = 1;
        stateLogData.errMessage = 'Bin State Log Not Found!!!';
      }
      resolve(stateLogData);
    } catch (err) {
      reject(err);
    }
  });
};

let handleUpdateStateLogById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let stateLogData = {};
      let state = await BinStateLog.findById(id).exec();
      if (state) {
        stateLogData.errCode = 0;
        stateLogData.errMessage = 'Updated!!!';
        stateLogData.stateBefore = state;
        await BinStateLog.updateOne(
          { _id: id },
          {
            status: 'solved',
          },
        );
        stateLogData.stateAfter = await BinStateLog.findById(id).exec();
      } else {
        stateLogData.errCode = 1;
        stateLogData.errMessage = 'Bin State Log Not Found!!!';
      }
      resolve(stateLogData);
    } catch (err) {
      reject(err);
    }
  });
};

export default {
  handleAddBin,
  handleGetAllBin,
  handleGetBinById,
  handleUpdateBinById,
  handleDeleteBinById,
  handleAddStateLog,
  handleUpdateStateLogById,
  handleGetStateLogById,
  handleGetAllStateLog,
};
