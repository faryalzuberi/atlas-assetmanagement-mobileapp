import {instanceAdcom} from '../http';

const getAtlasMoneyMarketFund = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=product_page_format1&id=2896')
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

const getSovereignFund = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=product_page_format1&id=2889')
    .then(res => {
      
     
      return res;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {};
      return errorObject;
    });
};

const getAtlasIncomeFund = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=product_page_format1&id=2898')
    .then(res => {
      
     
      return res;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {};
      return errorObject;
    });
};

const getAtlasStockMarketFund = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=product_page_format1&id=2903')
    .then(res => {
      
     
      return res;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {};
      return errorObject;
    });
};

const getAtlasIslamicMoneyMarketFund = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=product_page_format1&id=10206')
    .then(res => {
      
     
      return res;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {};
      return errorObject;
    });
};

const getAtlasIslamicIncomeFund = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=product_page_format1&id=2905')
    .then(res => {
      
     
      return res;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {};
      return errorObject;
    });
};

const getAtlasIslamicStockFund = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=product_page_format1&id=2906')
    .then(res => {
      
     
      return res;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {};
      return errorObject;
    });
};

//API Needs To Change
const getAtlasPensionFund = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=product_page_format1&id=2908')
    .then(res => {
      
     
      return res;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {};
      return errorObject;
    });
};

const getAtlasBachatPlan = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=product_page_format1&id=2908')
    .then(res => {
      
     
      return res;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {};
      return errorObject;
    });
};

export {getAtlasMoneyMarketFund, getSovereignFund, getAtlasIncomeFund, getAtlasStockMarketFund, getAtlasIslamicMoneyMarketFund, getAtlasIslamicIncomeFund, getAtlasIslamicStockFund, getAtlasPensionFund, getAtlasBachatPlan };
