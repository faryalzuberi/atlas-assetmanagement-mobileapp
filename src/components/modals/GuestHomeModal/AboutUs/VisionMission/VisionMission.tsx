import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';

import {Loader} from '../../../../shared/Loader';
import {DetailList} from '../../../../layouts/DetailList';
import {languageTxt} from '../../../../../utils/languageTxt';
import {getVisionMission} from '../../../../../config/api/aboutUs';

export const VisionMission = () => {
  const {isLoading, error, data, refetch}: any = useQuery(
    'getVisionMission',
    getVisionMission,
    {select: visionMission => visionMission},
  );

  const [visionMissionList, setVisionMissionList] = useState([]);
  useEffect(() => {
    if (data?.data) {
      let json: any = [];
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

  return (
    <>
      <Loader loader={isLoading} />
      <DetailList
        arrayList={visionMissionList}
        interval={1}
        headerTitle={languageTxt.visionMissionTxt}
      />
    </>
  );
};
