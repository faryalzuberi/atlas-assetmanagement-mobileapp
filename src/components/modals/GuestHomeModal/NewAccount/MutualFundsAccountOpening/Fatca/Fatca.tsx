import React from 'react';
import { languageTxt } from '../../../../../../utils/languageTxt';
import CustomFormInput from '../../../../../shared/CustomFormInput';
import RightArrow from '../../../../../../assets/icons/new_account/rightArrow.svg';
import { colorConstants } from '../../../../../../utils/colorConstants';
import { styles } from './styles';
import { ScrollView, Text, View } from 'react-native';
import { CustomRadioButton } from '../../../../../shared/CustomRadioButton';
import SingleBtn from '../../../../../shared/SingleBtn';

export const Fatca = () => {
    const arrayList = [
        { id: 1, value: "Yes", name: "Yes", selected: false },
        { id: 2, value: "No", name: "No", selected: false }
    ]
    return (<>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <CustomFormInput placeHolder={languageTxt.accountTitle} />
                <CustomFormInput placeHolder={languageTxt.cnic} />
                <CustomFormInput placeHolder={languageTxt.countryOfTheResidence} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <Text style={styles.textStyle}>{languageTxt.placeOfBirth}</Text>
                <CustomFormInput placeHolder={languageTxt.city} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.country} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.passportNumber} />
                <CustomFormInput placeHolder={languageTxt.usTaxpayerIdentificationNumber} />
                <View style={styles.declaration}>
                    <CustomRadioButton title={languageTxt.fatcaQ1} arrayList={arrayList} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.fatcaQ2} arrayList={arrayList} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.fatcaQ3} arrayList={arrayList} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.fatcaQ4} arrayList={arrayList} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.fatcaQ5} arrayList={arrayList} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.fatcaQ6} arrayList={arrayList} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.fatcaQ7} arrayList={arrayList} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.fatcaQ8} arrayList={arrayList} handleChange={(value: any) => { }} />
                </View>
                <Text style={styles.textStyle}>{languageTxt.crsForm}</Text>
                <CustomFormInput placeHolder={languageTxt.countryOfTaxResidence} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.tinNo} />
                <View style={styles.confirmationContainer}>
                    <Text style={styles.confirmationTextStyle}>{languageTxt.fatcaReviewA}</Text>
                    <Text style={styles.confirmationTextStyle}>{languageTxt.fatcaReviewB}</Text>
                    <Text style={styles.confirmationTextStyle}>{languageTxt.fatcaReviewC}</Text>
                </View>
                <SingleBtn text={languageTxt.next} width='40%'  onPressCB={()=>{}} />
            </View>
        </ScrollView>
    </>)
}
