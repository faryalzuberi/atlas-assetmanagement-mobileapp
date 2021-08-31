import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Loader } from '../../../../shared/Loader';
import { DetailList } from '../../../../shared/DetailList';
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
      for (const [key, value] of Object.entries(data?.data)) {
        const descriptionList: any = []
       
        if (Array.isArray(value)) {
          descriptionList.push({
            name: key,
            description: value,
          })
          json.push(descriptionList)
          
        }

        console.log(json[0])
      }

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
        headerParagraph={data?.managementTxt}
      />
    </>
  );
};
// const descriptionList : any = [];
//         if (key != 'Urdu-image') {
//           const descriptionValue : any = value;
//           if(typeof value === 'object'){
//             for(const [key, value] of  Object.entries(descriptionValue)){
//               descriptionList.push({
//                 name: key,
//                 description : value,
//               })
//             }

//           }
//           if(Array.isArray(value)){
//               descriptionList.push({
//                 name: key,
//                 description : value,
//               })
//           }
//           json.push({
//             name: key,
//             description : typeof value === 'object' ? descriptionList : value,
//           });
//         }