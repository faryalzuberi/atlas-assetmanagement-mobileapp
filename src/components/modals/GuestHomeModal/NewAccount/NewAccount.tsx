import React from 'react';
import {languageTxt} from '../../../../utils/languageTxt';
import {TitleList} from '../../../shared/TitleList';
import {colorConstants} from '../../../../utils/colorConstants';
import {NewAccountItem} from '../../../Items/NewAccountItems'
import CreateAccount from '../../../../assets/icons/new_account/createAccount.svg'
export const NewAccount = () => {
    return (
        <TitleList
        title={languageTxt.createAccount}
        icon={
          <CreateAccount
            width={'40'}
            height={'40'}
            fill={colorConstants.white}
          />}
          arrayList={NewAccountItem}
          interval={1}
        
      />
    )

}