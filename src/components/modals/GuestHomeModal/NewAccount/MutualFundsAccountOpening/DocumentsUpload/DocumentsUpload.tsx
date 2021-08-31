import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NomineeDetail } from '../../NomineeDetail';
import { styles } from './styles';
import SingleBtn from '../../../../../shared/SingleBtn';
import { languageTxt } from '../../../../../../utils/languageTxt';
import Positive from '../../../../../../assets/icons/new_account/positive.svg'
import Negative from '../../../../../../assets/icons/new_account/negative.svg'
import { colorConstants } from '../../../../../../utils/colorConstants';
import { DocmentsAccordian } from '../../../../../layouts/AccordianCardLayout';

export const DocumentsUpload = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <DocmentsAccordian  title={languageTxt.cnicDocuments}  icon={{
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
                }}  titleNumberOfLines={3} />
                <DocmentsAccordian  title={languageTxt.sourceOfIncome}  icon={{
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
                }}  titleNumberOfLines={2} />
                <DocmentsAccordian title={languageTxt.affidavit}  icon={{
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
                }}  titleNumberOfLines={2} />
                <DocmentsAccordian title={languageTxt.zakatAffidavit}  icon={{
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
                }}  titleNumberOfLines={2} />
                <DocmentsAccordian title={languageTxt.signatureCard}  icon={{
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
                }}  titleNumberOfLines={2} />
                <DocmentsAccordian title={languageTxt.nomineeCnic}  icon={{
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
                }}  titleNumberOfLines={2} />
                <DocmentsAccordian title={languageTxt.disclaimer}  icon={{
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
                }}  titleNumberOfLines={2} />
                <DocmentsAccordian title={languageTxt.fatcaForm}  icon={{
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
                }}  titleNumberOfLines={2} />
                <DocmentsAccordian title={languageTxt.otherDocuments} icon={{
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
                }}  titleNumberOfLines={2} />
                <SingleBtn text={languageTxt.next} width='40%' onPressCB={() => { }} />
            </ScrollView>
        </View>

    )
}