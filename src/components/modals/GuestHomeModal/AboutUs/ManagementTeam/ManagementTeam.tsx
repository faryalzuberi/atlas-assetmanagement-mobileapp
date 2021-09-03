import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Loader } from '../../../../shared/Loader';
import { DetailList } from '../../../../layouts/DetailList';
import { languageTxt } from '../../../../../utils/languageTxt';
import { getTeamManagement } from '../../../../../config/api/aboutUs';

export const ManagementTeam = () => {
  const { isLoading, error, data, refetch }: any = useQuery(
    'getTeamManagement',
    getTeamManagement,
    { select: (teamManagement: any) => teamManagement },
  );
  const [managementTxt, setManagementTxt] = useState([]);
  useEffect(() => {
    if (data?.data) {
      let json: any = [];
      data?.data?.members && data?.data?.members.map((v:any,i:any)=>{
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


  return (
    <>
      <Loader loader={isLoading} />
      <DetailList
        arrayList={managementTxt}
        interval={1}
        headerTitle={languageTxt.managementTeamTxt}
        headerParagraph={data?.data?.top_description}
      />
    </>
  );
};
