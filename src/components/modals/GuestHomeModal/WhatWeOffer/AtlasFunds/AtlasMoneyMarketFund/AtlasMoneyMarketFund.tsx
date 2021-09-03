import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';

import {Loader} from '../../../../../shared/Loader';
import {DetailList} from '../../../../../layouts/DetailList';
import {languageTxt} from '../../../../../../utils/languageTxt';
import {getAtlasMoneyMarketFund} from '../../../../../../config/api/whatWeOffer';


export const AtlasMoneyMarketFund = () => {
  const {isLoading, error, data, refetch}: any = useQuery(
    'getAtlasMoneyMarketFund',
    getAtlasMoneyMarketFund,
    {select: (boardOfDirectors: any) => boardOfDirectors},
  );

  const [marketFundList, setMarketFundList] = useState<any>([]);
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
   
      setMarketFundList(json);
    }
  }, [data]);

  return (
    <>
      <Loader loader={isLoading} />
      {console.log(marketFundList)}
      <DetailList
        arrayList={marketFundList}
        interval={1}
        headerTitle={languageTxt.atlasMoneyMarketFundTxt}
      />
    </>
  );
};
