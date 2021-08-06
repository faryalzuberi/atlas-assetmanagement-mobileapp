import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NomineeDetail } from '../../NomineeDetail';
import { styles } from './styles';
import SingleBtn from '../../../../../shared/SingleBtn';
import { languageTxt } from '../../../../../../utils/languageTxt';


export const NomineeDetails = () => {
    return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <NomineeDetail title={languageTxt.nominee1} />
                    <NomineeDetail title={languageTxt.nominee2} />
                    <NomineeDetail title={languageTxt.nominee3} />
                    <SingleBtn text={languageTxt.next} width='40%'  onPressCB={()=>{}} />
                    </ScrollView>
            </View>
       
    )
}