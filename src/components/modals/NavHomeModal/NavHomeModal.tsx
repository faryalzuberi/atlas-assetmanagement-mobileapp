import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { languageTxt } from '../../../utils/languageTxt';
import Nav from '../../../assets/icons/guest_navigation/nav.svg'
import { colorConstants } from '../../../utils/colorConstants';
import Positive from '../../../assets/icons/new_account/positive.svg'
import Negative from '../../../assets/icons/new_account/negative.svg'
import { styles } from './styles';
import SingleBtn from '../../shared/SingleBtn';
import { Loader } from '../../shared/Loader';
import { HeaderCardLayout } from '../../layouts/CardLayout';
import NavHook from '../../../hooks/NavHook'
import { NavAccordian } from '../../layouts/AccordianCardLayout';
import { TableComponent } from '../../shared/TableComponent';

export const NavHomeModal = ({ navigation }: any) => {
    const {dailyNav, dailyNav1,dailyNav2, dailyNav3, title, isLoading, date, tableHead } : any  = NavHook();
    const {navHead} = tableHead();
    console.log( "nhy", navHead  )

    return (
        
        <ScrollView showsVerticalScrollIndicator={false} >
            {
                (isLoading) ? (<Loader loader={isLoading} />) : (<><HeaderCardLayout title={languageTxt.nav} icon={
                    <Nav
                        width={'40'}
                        height={'40'}
                        fill={colorConstants.white}
                    />} />
                    <View style={styles.container}>
                        <NavAccordian  title={title && title[0]}  icon={{
                            positive: (
                                <Positive
                                    width={'15'}
                                    height={'15'}
                                    fill={colorConstants.primary}
                                />
                            ),
                            negative: (
                                <Negative
                                    width={'15'}
                                    height={'15'}
                                    fill={colorConstants.primary}
                                />
                            ),
                        }} description={date} />
                        <NavAccordian  title={title && title[1]}  icon={{
                            positive: (
                                <Positive
                                    width={'15'}
                                    height={'15'}
                                    fill={colorConstants.primary}
                                />
                            ),
                            negative: (
                                <Negative
                                    width={'15'}
                                    height={'15'}
                                    fill={colorConstants.primary}
                                />
                            ),
                        }} description={date} />
                        <NavAccordian  title={title && title[2]}  icon={{
                            positive: (
                                <Positive
                                    width={'15'}
                                    height={'15'}
                                    fill={colorConstants.primary}
                                />
                            ),
                            negative: (
                                <Negative
                                    width={'15'}
                                    height={'15'}
                                    fill={colorConstants.primary}
                                />
                            ),
                        }} description={date} />
                        <NavAccordian  title={title && title[3]}  icon={{
                            positive: (
                                <Positive
                                    width={'15'}
                                    height={'15'}
                                    fill={colorConstants.primary}
                                />
                            ),
                            negative: (
                                <Negative
                                    width={'15'}
                                    height={'15'}
                                    fill={colorConstants.primary}
                                />
                            ),
                        }} description={date} />
                        <View style={styles.buttonContainer}>
                            <SingleBtn text={languageTxt.navHistoryTxt} width={150} onPressCB={() => { navigation.navigate('NavHistory') }} />
                            
                        </View>
                    </View></>)
            }

        </ScrollView>
    );
};