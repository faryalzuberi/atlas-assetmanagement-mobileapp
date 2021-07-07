import React from 'react';
import {useQuery} from 'react-query';

import {Loader} from '../../../../shared/Loader';
import {DetailList} from '../../../../shared/DetailList';
import {languageTxt} from '../../../../../utils/languageTxt';
import {getTeamManagement} from '../../../../../config/api/aboutUs';

export const ManagementTeam = () => {
  const {isLoading, error, data, refetch}: any = useQuery(
    'getTeamManagement',
    getTeamManagement,
    {select: (teamManagement: any) => teamManagement?.data},
  );

  return (
    <>
      <Loader loader={isLoading} />
      <DetailList
        arrayList={data?.members}
        interval={1}
        headerTitle={languageTxt.managementTeamTxt}
        headerParagraph={data?.top_description}
      />
    </>
  );
};
