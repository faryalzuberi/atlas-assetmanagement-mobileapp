import {instanceAdcom} from '../http';

const getDailyNav = async () => {
    return instanceAdcom
      .get('/webservice_for_afl_app.php?fun=daily_nav')
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

  export {
    getDailyNav
  }  