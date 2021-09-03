import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';

import {Loader} from '../../../../shared/Loader';
import {DetailList} from '../../../../layouts/DetailList';
import {languageTxt} from '../../../../../utils/languageTxt';
import {getBoardOfDirectors} from '../../../../../config/api/aboutUs';

export const BoardOfDirectors = () => {
  const {isLoading, error, data, refetch}: any = useQuery(
    'getBoardOfDirectors',
    getBoardOfDirectors,
    {select: (boardOfDirectors: any) => boardOfDirectors?.data?.members},
  );
  const [introductionList, setIntroductionList] = useState([]);
  useEffect(() => {
    if (data) {
      let json: any = [];
     data && data.map((v:any,i:any)=>{
       json.push({
         name: v?.name,
         designation: v?.designation,
         description: v?.description[0].description_p1,
         profile_image: v?.profile_image
       })
     })
      setIntroductionList(json);
    }
  }, [data]);

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
