import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';

import {Loader} from '../../../../../shared/Loader';
import {DetailList} from '../../../../../shared/DetailList';
import {languageTxt} from '../../../../../../utils/languageTxt';
import {getAtlasIncomeFund} from '../../../../../../config/api/whatWeOffer';



export const AtlasIncomeFund = () => {
  const {isLoading, error, data, refetch}: any = useQuery(
    'getAtlasIncomeFund',
    getAtlasIncomeFund,
    {select: (boardOfDirectors: any) => boardOfDirectors},
  );

  const [incomeFundList, setIncomeFundList] = useState<any>([]);
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
   
      setIncomeFundList(json);
    }
  }, [data]);

  return (
    <>
      <Loader loader={isLoading} />
      <DetailList
        arrayList={incomeFundList}
        interval={1}
        headerTitle={languageTxt.atlasIncomeFundTxt}
      />
    </>
  );
};
