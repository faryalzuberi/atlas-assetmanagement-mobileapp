import React from 'react';
import {useQuery} from 'react-query';

import {Loader} from '../../../../shared/Loader';
import {DetailList} from '../../../../shared/DetailList';
import {languageTxt} from '../../../../../utils/languageTxt';
import {getBoardOfDirectors} from '../../../../../config/api/aboutUs';

export const BoardOfDirectors = () => {
  const {isLoading, error, data, refetch}: any = useQuery(
    'getBoardOfDirectors',
    getBoardOfDirectors,
    {select: (boardOfDirectors: any) => boardOfDirectors?.data?.members},
  );

  return (
    <>
      <Loader loader={isLoading} />
      <DetailList
        arrayList={data}
        interval={1}
        headerTitle={languageTxt.boardOfDirectorsTxt}
      />
    </>
  );
};
