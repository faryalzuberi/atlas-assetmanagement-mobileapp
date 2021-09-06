import React from 'react';
import {Loader} from '../../../../shared/Loader';
import {DetailList} from '../../../../layouts/DetailList';
import {languageTxt} from '../../../../../utils/languageTxt';
import {introductionTransformer} from '../../../../../utils/Transformer/aboutUsTransformer';

export const Introduction = () => {
  const {introductionList, isLoading} = introductionTransformer();
  
  return (
    <>
      <Loader loader={isLoading} />
      <DetailList
        arrayList={introductionList}
        interval={1}
        headerTitle={languageTxt.introductionTxt}
      />
    </>
  );
};
