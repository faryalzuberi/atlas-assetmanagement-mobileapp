import React from 'react';
import { Loader } from '../../../../shared/Loader';
import { DetailList } from '../../../../layouts/DetailList';
import { languageTxt } from '../../../../../utils/languageTxt';
import {managementTransformer} from '../../../../../utils/Transformer/aboutUsTransformer';

export const ManagementTeam = () => {

  const {managementTxt, header, isLoading} = managementTransformer();


  return (
    <>
      <Loader loader={isLoading} />
      <DetailList
        arrayList={managementTxt}
        interval={1}
        headerTitle={languageTxt.managementTeamTxt}
        headerParagraph={header}
      />
    </>
  );
};
