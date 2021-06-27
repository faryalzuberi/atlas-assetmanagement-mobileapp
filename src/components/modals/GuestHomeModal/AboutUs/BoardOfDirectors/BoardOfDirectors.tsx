import React from 'react';

import {exampleItems} from '../../../../Items/exampleItems';
import {DetailList} from '../../../../shared/DetailList';
import {languageTxt} from '../../../../../utils/languageTxt';

export const BoardOfDirectors = () => {
  return (
    <DetailList
      arrayList={exampleItems}
      interval={1}
      headerTitle={languageTxt.boardOfDirectorsTxt}
    />
  );
};
