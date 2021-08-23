import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { languageTxt } from '../../../utils/languageTxt';
import { CustomCard } from '../../shared/CustomCard';
import Nav from '../../../assets/icons/guest_navigation/nav.svg'
import { colorConstants } from '../../../utils/colorConstants';
import Positive from '../../../assets/icons/new_account/positive.svg'
import Negative from '../../../assets/icons/new_account/negative.svg'
import { styles } from './styles';
import SingleBtn from '../../shared/SingleBtn';
import { useQuery } from 'react-query';
import { getDailyNav } from '../../../config/api/nav';
import { Loader } from '../../shared/Loader';
import { HeaderCardLayout } from '../../layouts/CardLayout';

export const NavHomeModal = ({ navigation }: any) => {
    const { isLoading, error, data, refetch }: any = useQuery(
        'getDailyNav',
        getDailyNav,
        { select: (parentFunds: any) => parentFunds },
    );
    const [title, setTitle] = useState<any>([]);
   
    const [dailyNav, setDailyNav] = useState<any>([
        {
            tableHead: [],
            tableContent: []
        },
        {
            tableHead: [],
            tableContent: []
        },
        {
            tableHead: [],
            tableContent: []
        },
        {
            tableHead: [],
            tableContent: []
        },
    ]);
    useEffect(() => {
        if (data?.data?.data?.parent_funds) {
            const navTitle = []
            for (const [key, value] of Object.entries(data?.data?.data?.parent_funds)) {
                navTitle.push(key)
            }
            setTitle(navTitle)
            for (const [key, value] of Object.entries(data?.data?.data?.parent_funds)) {
                const fundValue: any = value;
                if (key === title[0]) {
                    // console.log(value)
                    // console.log(key)
                    const tabCol = [];
                    const tabContent = []
                    for (const [key, value] of Object.entries(fundValue)) {
                        tabCol.push(key);
                        tabContent.push(value); 
                    }
                    console.log( tabCol)
                }
            }
            

        }
    }, [data]);
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            {console.log(dailyNav && dailyNav[0])}
            {
                (isLoading) ? (<Loader loader={isLoading} />) : (<><HeaderCardLayout  title={languageTxt.nav} icon={
                    <Nav
                        width={'40'}
                        height={'40'}
                        fill={colorConstants.white}
                    />} />
                    <View style={styles.container}>
                        <CustomCard type={languageTxt.accordian} title={title[0]} subType={languageTxt.navAccordianTxt} icon={{
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
                        }} />
                        <CustomCard type={languageTxt.accordian} title={title[1]} subType={languageTxt.navAccordianTxt} icon={{
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
                        }} />
                        <CustomCard type={languageTxt.accordian} title={title[2]} subType={languageTxt.navAccordianTxt} icon={{
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
                        }} />
                        <CustomCard type={languageTxt.accordian} title={title[3]} subType={languageTxt.navAccordianTxt} icon={{
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
                        }} />
                        <View style={styles.buttonContainer}>
                            <SingleBtn text={languageTxt.navHistoryTxt} width={150} onPressCB={() => { navigation.navigate('NavHistory') }} />
                        </View>
                    </View></>)
            }

        </ScrollView>
    );
};