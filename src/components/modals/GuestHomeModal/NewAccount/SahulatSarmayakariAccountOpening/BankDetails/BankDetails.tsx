import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colorConstants } from '../../../../../../utils/colorConstants';
import { languageTxt } from '../../../../../../utils/languageTxt';
import CustomFormInput from '../../../../../shared/CustomFormInput';
import { styles } from './styles';
import RightArrow from '../../../../../../assets/icons/new_account/rightArrow.svg';
import SingleBtn from '../../../../../shared/SingleBtn';
export const BankDetails = () => {
    return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.textStyle}>{languageTxt.bankDetails}</Text>
                <CustomFormInput placeHolder={languageTxt.bankName} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                    <CustomFormInput placeHolder={languageTxt.branchName} />
                    <CustomFormInput placeHolder={languageTxt.branchAddress} />
                    <CustomFormInput placeHolder={languageTxt.acNo} />
                    <CustomFormInput placeHolder={languageTxt.iban} />
                    <CustomFormInput placeHolder={languageTxt.branchCity} />
                    <CustomFormInput placeHolder={languageTxt.dividendPayment} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                    <SingleBtn text={languageTxt.submit} width='40%'  onPressCB={()=>{}} />
                    
                    </ScrollView>
            </View>
       
    )
}