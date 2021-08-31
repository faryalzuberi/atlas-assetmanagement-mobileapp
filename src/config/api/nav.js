import {instanceAdcom} from '../http';

const getDailyNav = async () => {
    return instanceAdcom
      .get('/webservice_for_afl_app.php?fun=daily_nav')
      .then(res => {
        console.log("res",res)
        return res;
      })
      .catch(error => {
        console.log("res",error)
        const {response} = error;
        const {request, ...errorObject} = response;
        let json = {};
        return errorObject;
      });
  };

  export {
    getDailyNav
  }  