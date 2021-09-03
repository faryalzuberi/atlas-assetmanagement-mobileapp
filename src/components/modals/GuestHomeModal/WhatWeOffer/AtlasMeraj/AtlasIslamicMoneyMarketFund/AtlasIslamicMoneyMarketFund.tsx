import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';

import {Loader} from '../../../../../shared/Loader';
import {DetailList} from '../../../../../layouts/DetailList';
import {languageTxt} from '../../../../../../utils/languageTxt';
import {getAtlasIslamicMoneyMarketFund} from '../../../../../../config/api/whatWeOffer';



export const AtlasIslamicMoneyMarketFund = () => {
  const {isLoading, error, data, refetch}: any = useQuery(
    'getAtlasIslamicMoneyMarketFund',
    getAtlasIslamicMoneyMarketFund,
    {select: (boardOfDirectors: any) => boardOfDirectors},
  );

  const [islamicMoneyMarketFund, setIslamicMoneyMarketFund] = useState<any>([]);
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
   
      setIslamicMoneyMarketFund(json);
    }
  }, [data]);

  return (
    <>
      <Loader loader={isLoading} />
      <DetailList
        arrayList={islamicMoneyMarketFund}
        interval={1}
        headerTitle={languageTxt.atlasIslamicMoneyMarketFundTxt}
      />
    </>
  );
};
