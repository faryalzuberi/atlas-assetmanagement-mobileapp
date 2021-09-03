import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {languageTxt} from '../languageTxt';
import {getIntroduction} from '../../config/api/aboutUs';

export const introductionTransformer = () => {
    const {isLoading, error, data, refetch} = useQuery(
        'getIntroduction',
        getIntroduction,
        {select: introduction => introduction},
      );
    
      const [introductionList, setIntroductionList] = useState([]);
      useEffect(() => {
        if (data?.data) {
          let json = [{
            type: languageTxt.introductionTxt,
            heading: '',
            description: null,
            middleContent: null,
          }];
          for (const [key, value] of Object.entries(data.data)) {
            if (key == 'heading') {
              json[0].heading = value
            } else if(key == 'description'){
              json[0].description =  value
            }else if(key == 'middle_content'){
              json[0].middleContent =  value
            }
          }
          setIntroductionList(json);
        }
      }, [data]);

      return {introductionList, isLoading}
}