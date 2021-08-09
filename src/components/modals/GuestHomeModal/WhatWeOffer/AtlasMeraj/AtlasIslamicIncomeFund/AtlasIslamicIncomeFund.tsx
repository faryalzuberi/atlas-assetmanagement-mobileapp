import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';

import {Loader} from '../../../../../shared/Loader';
import {DetailList} from '../../../../../shared/DetailList';
import {languageTxt} from '../../../../../../utils/languageTxt';
import {getAtlasIslamicIncomeFund} from '../../../../../../config/api/whatWeOffer';



export const AtlasIslamicIncomeFund = () => {
  const {isLoading, error, data, refetch}: any = useQuery(
    'getAtlasIslamicIncomeFund',
    getAtlasIslamicIncomeFund,
    {select: (boardOfDirectors: any) => boardOfDirectors},
  );

  const [islamicIncomeFundList, setIslamicIncomeFund] = useState<any>([]);
  useEffect(() => {
    if (data?.data?.data ) {
      let json: any = [];
      for (const [key, value] of  Object.entries(data?.data?.data)) {
        const descriptionList : any = [];
        if (key != 'Urdu-image') {
          if(typeof value === 'object'){
            const descriptionValue : any = value;
            for(const [key, value] of  Object.entries(descriptionValue)){
              descriptionList.push({
                name: key,
                description : value,
              })
            }
          }
          json.push({
            name: key,
            description : typeof value === 'object' ? descriptionList : value,
          });
        }
      }
   
      setIslamicIncomeFund(json);
    }
  }, [data]);

  return (
    <>
      <Loader loader={isLoading} />
      <DetailList
        arrayList={islamicIncomeFundList}
        interval={1}
        headerTitle={languageTxt.atlasIslamicIncomeFundTxt}
      />
    </>
  );
};
