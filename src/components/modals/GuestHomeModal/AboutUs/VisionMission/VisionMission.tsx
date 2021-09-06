import React from 'react';
import {Loader} from '../../../../shared/Loader';
import {DetailList} from '../../../../layouts/DetailList';
import {languageTxt} from '../../../../../utils/languageTxt';
import {visionMissionTransformer} from '../../../../../utils/Transformer/aboutUsTransformer';
export const VisionMission = () => {
  
  const {visionMissionList, isLoading} = visionMissionTransformer();

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
