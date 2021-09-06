import React from 'react';
import {Loader} from '../../../../shared/Loader';
import {DetailList} from '../../../../layouts/DetailList';
import {languageTxt} from '../../../../../utils/languageTxt';
import {boardOfDirectorsTransformer} from '../../../../../utils/Transformer/aboutUsTransformer';

export const BoardOfDirectors = () => {
  
  const {introductionList, isLoading} = boardOfDirectorsTransformer();

  return (
    <>
      <Loader loader={isLoading} />
      <DetailList
        arrayList={introductionList}
        interval={1}
        headerTitle={languageTxt.boardOfDirectorsTxt}
      />
    </>
  );
};
