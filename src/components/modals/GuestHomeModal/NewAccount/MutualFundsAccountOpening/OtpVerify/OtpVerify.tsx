import React from 'react';
import { languageTxt } from '../../../../../../utils/languageTxt';
import CustomFormInput from '../../../../../shared/CustomFormInput';
import RightArrow from '../../../../../../assets/icons/new_account/rightArrow.svg';
import { colorConstants } from '../../../../../../utils/colorConstants';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import SingleBtn from '../../../../../shared/SingleBtn';
export const OtpVerify = () => {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <CustomFormInput placeHolder={languageTxt.folioType} RightIcon={() => (<RightArrow width={'20'}
                        height={'20'}
                        fill={colorConstants.black} />)} />
                    <CustomFormInput placeHolder={languageTxt.cnic} />
                    <CustomFormInput placeHolder={languageTxt.mobileNumber} />
                    <CustomFormInput placeHolder={languageTxt.ownershipOfYourMobileNumber} RightIcon={() => (<RightArrow width={'20'}
                        height={'20'}
                        fill={colorConstants.black} />)} />
                    <CustomFormInput placeHolder={languageTxt.email} />
                    <SingleBtn text={languageTxt.getVerificationCode} width='70%' color={colorConstants.red} onPressCB={()=>{}} />
                </View>
            </ScrollView>
        </>
    )
}