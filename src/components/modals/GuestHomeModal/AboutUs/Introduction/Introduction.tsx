import React from 'react';

import {exampleItems} from '../../../../Items/exampleItems';
import {DetailList} from '../../../../shared/DetailList';
import {languageTxt} from '../../../../../utils/languageTxt';

export const Introduction = () => {
  return (
    <DetailList
      arrayList={exampleItems}
      interval={1}
      headerTitle={languageTxt.introductionTxt}
    />
  );
};
