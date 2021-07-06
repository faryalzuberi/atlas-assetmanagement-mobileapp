import {instanceAdcom} from '../http';

const getAtlasMoneyMarketFund = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=format3&id=2896')
    .then(res => {
      // let json = {
      //   data: res?.data?.data,
      //   success: res?.data?.success,
      //   error: false,
      // };
      return res;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {};
      return errorObject;
    });
};

export {getAtlasMoneyMarketFund};
