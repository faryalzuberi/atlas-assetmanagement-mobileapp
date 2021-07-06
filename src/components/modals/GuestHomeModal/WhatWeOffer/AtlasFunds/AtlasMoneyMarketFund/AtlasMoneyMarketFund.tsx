import React from 'react';
import {useQuery} from 'react-query';

import {Loader} from '../../../../../shared/Loader';
import {DetailList} from '../../../../../shared/DetailList';
import {languageTxt} from '../../../../../../utils/languageTxt';
import {getAtlasMoneyMarketFund} from '../../../../../../config/api/whatWeOffer';

export const AtlasMoneyMarketFund = () => {
  const {isLoading, error, data, refetch}: any = useQuery(
    'getAtlasMoneyMarketFund',
    getAtlasMoneyMarketFund,
    {select: (boardOfDirectors: any) => boardOfDirectors},
  );

  console.log(data);

  return (
    <>
      <Loader loader={isLoading} />
      <DetailList
        arrayList={[]}
        interval={1}
        headerTitle={languageTxt.atlasMoneyMarketFundTxt}
      />
    </>
  );
};
