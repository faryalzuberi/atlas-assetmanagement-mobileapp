import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { languageTxt } from '../../../../utils/languageTxt';
import Nav from '../../../../assets/icons/guest_navigation/nav.svg'
import RightArrow from '../../../../assets/icons/new_account/rightArrow.svg';
import { colorConstants } from '../../../../utils/colorConstants';
import { View } from 'react-native';
import { styles } from './styles';
import { HeaderCardLayout } from '../../../layouts/CardLayout';
import SingleBtn from '../../../shared/SingleBtn';
import CustomFormInput from '../../../shared/CustomFormInput';
export const NavHistory = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <HeaderCardLayout  title={languageTxt.navHistoryTxt} icon={
                <Nav
                    width={'40'}
                    height={'40'}
                    fill={colorConstants.white}
                />} />
            <View style={styles.container}>
                <CustomFormInput placeHolder={languageTxt.selectCategoryTxt} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                <CustomFormInput placeHolder={languageTxt.selectFundTxt} RightIcon={() => (<RightArrow width={'20'}
                    height={'20'}
                    fill={colorConstants.black} />)} />
                     <View style={styles.accordianRow}>
                        <View style={styles.row2input1}>
                        <CustomFormInput  placeHolder={languageTxt.from} RightIcon={() => (<RightArrow width={'10'}
                            height={'10'}
                            fill={colorConstants.black} />)} />
                        </View>
                        <View style={styles.row2input2}>
                        <CustomFormInput placeHolder={languageTxt.to} RightIcon={() => (<RightArrow width={'10'}
                            height={'10'}
                            fill={colorConstants.black} />)} />
                        </View>
                        </View>
                <View style={styles.buttonContainer}>
                    <SingleBtn text={languageTxt.search} width={100} />
                </View>
            </View>
        </ScrollView>
    )
}