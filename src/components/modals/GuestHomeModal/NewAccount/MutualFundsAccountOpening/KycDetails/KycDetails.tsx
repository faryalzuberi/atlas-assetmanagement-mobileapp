import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colorConstants } from '../../../../../../utils/colorConstants';
import { languageTxt } from '../../../../../../utils/languageTxt';
import CustomFormInput from '../../../../../shared/CustomFormInput';
import { styles } from './styles';
import RightArrow from '../../../../../../assets/icons/new_account/rightArrow.svg';
import CheckedCheckbox from '../../../../../../assets/icons/new_account/checkedCheckbox.svg';
import { CustomRadioButton } from '../../../../../shared/CustomRadioButton';
import SingleBtn from '../../../../../shared/SingleBtn';
export const KycDetails = () => {
    const arrayList = [
        { id: 1, value: "Yes", name: "Yes", selected: false },
        { id: 2, value: "No", name: "No", selected: false }
    ]
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.textStyle}>{languageTxt.KycDetaisTile}</Text>
                <CustomFormInput placeHolder={languageTxt.name} />
                <CustomFormInput placeHolder={languageTxt.cnicNumber} />
                <CustomFormInput placeHolder={languageTxt.age} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.martialStatus} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.noOfDependents} />
                <CustomFormInput placeHolder={languageTxt.occupation} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.education} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.sourceOfIncome} />
                <CustomFormInput placeHolder={languageTxt.approximateAnnualIncome} />
                <Text style={styles.textStyle}>{languageTxt.KycDetaisSubTitle}</Text>
                <View style={styles.declaration}>
                    <CustomRadioButton title={languageTxt.kycDetailsQ1} arrayList={arrayList} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.kycDetailsQ2} arrayList={arrayList} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.kycDetailsQ3} arrayList={arrayList} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.kycDetailsQ4} arrayList={arrayList} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.kycDetailsQ5} arrayList={arrayList} handleChange={(value: any) => { }} />
                </View>
                <Text style={styles.textStyle}>{languageTxt.ultimateBeneficiaryOfTheInvestment}</Text>
                <View style={styles.declaration}>
                    <CustomRadioButton title={languageTxt.ultimateBeneficiary} arrayList={arrayList} handleChange={(value: any) => { }} />
                </View>
                <CustomFormInput placeHolder={languageTxt.name} />
                <CustomFormInput placeHolder={languageTxt.cnicNumber} />
                <View style={styles.confirmationContainer}>
                    <CheckedCheckbox width={'15'}
                        height={'15'}
                        fill={colorConstants.black} />
                    <Text style={styles.confirmationTextStyle}>{languageTxt.kycDetailConfirmationTxt}</Text>
                </View>
                <SingleBtn text={languageTxt.next} width='40%' onPressCB={() => { }} />

            </ScrollView>
        </View>

    )
}