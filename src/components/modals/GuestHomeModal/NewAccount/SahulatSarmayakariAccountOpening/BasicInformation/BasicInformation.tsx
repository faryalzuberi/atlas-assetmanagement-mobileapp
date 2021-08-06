import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { colorConstants } from '../../../../../../utils/colorConstants';
import { languageTxt } from '../../../../../../utils/languageTxt';
import RightArrow from '../../../../../../assets/icons/new_account/rightArrow.svg';
import CustomFormInput from '../../../../../shared/CustomFormInput';
import { styles } from './styles';
import SingleBtn from '../../../../../shared/SingleBtn';

export const BasicInformation = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>{languageTxt.informationAboutAccountHolder}</Text>
                <CustomFormInput placeHolder={languageTxt.name} />
                <CustomFormInput placeHolder={languageTxt.principleCnic} />
                <CustomFormInput placeHolder={languageTxt.lifeTime} />
                <CustomFormInput placeHolder={languageTxt.expiryDate} />
                <CustomFormInput placeHolder={languageTxt.dob} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.gender} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.fatherName} />
                <CustomFormInput placeHolder={languageTxt.motherName} />
                <CustomFormInput placeHolder={languageTxt.guardianName} />
                <CustomFormInput placeHolder={languageTxt.guardianCnic} />
                <CustomFormInput placeHolder={languageTxt.relation} />
                <CustomFormInput placeHolder={languageTxt.mailingAddress} />
                <CustomFormInput placeHolder={languageTxt.city} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.country} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                     <CustomFormInput placeHolder={languageTxt.permanentAddress} />
                <CustomFormInput placeHolder={languageTxt.city} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.country} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                    <CustomFormInput placeHolder={languageTxt.mobileNumber} />
                    <CustomFormInput placeHolder={languageTxt.telephoneNumber} />
                    <CustomFormInput placeHolder={languageTxt.emailAddress} />
                    <CustomFormInput placeHolder={languageTxt.occupation} />
                    <CustomFormInput placeHolder={languageTxt.sourceOfIncome} />
                    <CustomFormInput placeHolder={languageTxt.zakatStatus} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                    <SingleBtn text={languageTxt.next} width='40%'  onPressCB={()=>{}} />
            </View>
        </ScrollView>

    )
}