import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {languageTxt} from '../languageTxt';
import {getIntroduction} from '../../config/api/aboutUs';
import {getVisionMission} from '../../config/api/aboutUs';
import {getBoardOfDirectors} from '../../config/api/aboutUs';
import { getTeamManagement } from '../../config/api/aboutUs';

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

export const visionMissionTransformer = () => {
  const {isLoading, error, data, refetch} = useQuery(
    'getVisionMission',
    getVisionMission,
    {select: visionMission => visionMission},
  );

  const [visionMissionList, setVisionMissionList] = useState([]);
  useEffect(() => {
    if (data?.data) {
      let json = [];
      for (const [key, value] of Object.entries(data.data)) {
        if (key != 'Urdu-image') {
          json.push({
            name: key,
            description: value,
          });
        }
      }
      setVisionMissionList(json);
    }
  }, [data]);

    return {visionMissionList, isLoading}
}

export const boardOfDirectorsTransformer = () => {
  const {isLoading, error, data, refetch} = useQuery(
    'getBoardOfDirectors',
    getBoardOfDirectors,
    {select: (boardOfDirectors) => boardOfDirectors?.data?.members},
  );
  const [introductionList, setIntroductionList] = useState([]);
  useEffect(() => {
    if (data) {
      let json = [];
     data && data.map((v,i)=>{
       json.push({
         name: v?.name,
         designation: v?.designation,
         description: v?.description[0].description_p1,
         profile_image: v?.profile_image
       })
     })
      setIntroductionList(json);
    }
  }, [data]);

    return {introductionList, isLoading}
}

export const managementTransformer = () => {
  const { isLoading, error, data, refetch } = useQuery(
    'getTeamManagement',
    getTeamManagement,
    { select: (teamManagement) => teamManagement },
  );
  const [managementTxt, setManagementTxt] = useState([]);
  useEffect(() => {
    if (data?.data) {
      let json = [];
      data?.data?.members && data?.data?.members.map((v,i)=>{
        json.push({
          name: v?.name,
          designation: v?.designation,
          description: v?.description[0].description_p1,
          profile_image: v?.profile_image
        })
      })

      setManagementTxt(json);
    }
  }, [data]);

    return {managementTxt, header: data?.data?.top_description , isLoading}
}