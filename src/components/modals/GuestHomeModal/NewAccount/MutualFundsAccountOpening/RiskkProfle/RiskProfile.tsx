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
import { list1, list2, list3, list4, list5, tableHeader, tableContent } from '../../../../../Items/riskProfileItems';
import { TableComponent } from '../../../../../shared/TableComponent';
import SingleBtn from '../../../../../shared/SingleBtn';
export const RiskProfile = () => {

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.textStyle}>{languageTxt.riskProfileForm}</Text>
                <CustomFormInput placeHolder={languageTxt.ageInYears} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.martialStatus} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.noOfDependents} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.occupation} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.qualificaion} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <View style={styles.declaration}>
                    <CustomRadioButton title={languageTxt.riskProfileQ1} arrayList={list1} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.riskProfileQ2} arrayList={list2} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.riskProfileQ3} arrayList={list3} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.riskProfileQ4} arrayList={list4} handleChange={(value: any) => { }} />
                    <CustomRadioButton title={languageTxt.riskProfileQ5} arrayList={list5} handleChange={(value: any) => { }} />
                </View>
                <CustomFormInput placeHolder={languageTxt.basedOnYourRiskAppetiteAndScore} />
                <Text style={styles.textStyle}>{languageTxt.belowAreTheSuitableSchemesForYourInvestment}</Text>
                <View style={{ flex: 1 }}>
                    <TableComponent tableHeader={tableHeader} tableContent={tableContent}/>
                </View>
                <View style={styles.confirmationContainer}>
                    <CheckedCheckbox width={'15'}
                        height={'15'}
                        fill={colorConstants.black} />
                    <Text style={styles.confirmationTextStyle}>{languageTxt.riskProfileConfirmation}</Text>
                </View>
                <SingleBtn text={languageTxt.next} width='40%' onPressCB={() => { }} />
            </ScrollView>
        </View>

    )
}