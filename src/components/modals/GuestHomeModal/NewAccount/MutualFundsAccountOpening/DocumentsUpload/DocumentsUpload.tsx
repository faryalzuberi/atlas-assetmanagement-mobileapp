import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NomineeDetail } from '../../NomineeDetail';
import { styles } from './styles';
import SingleBtn from '../../../../../shared/SingleBtn';
import { languageTxt } from '../../../../../../utils/languageTxt';
import Positive from '../../../../../../assets/icons/new_account/positive.svg'
import Negative from '../../../../../../assets/icons/new_account/negative.svg'
import { CustomCard } from '../../../../../shared/CustomCard';
import { colorConstants } from '../../../../../../utils/colorConstants';

export const DocumentsUpload = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CustomCard type={languageTxt.accordian} title={languageTxt.cnicDocuments} subType={languageTxt.documentsAccordian} icon={{
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
                <CustomCard type={languageTxt.accordian} title={languageTxt.sourceOfIncome} subType={languageTxt.documentsAccordian} icon={{
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
                <CustomCard type={languageTxt.accordian} title={languageTxt.affidavit} subType={languageTxt.documentsAccordian} icon={{
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
                <CustomCard type={languageTxt.accordian} title={languageTxt.zakatAffidavit} subType={languageTxt.documentsAccordian} icon={{
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
                <CustomCard type={languageTxt.accordian} title={languageTxt.signatureCard} subType={languageTxt.documentsAccordian} icon={{
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
                <CustomCard type={languageTxt.accordian} title={languageTxt.nomineeCnic} subType={languageTxt.documentsAccordian} icon={{
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
                <CustomCard type={languageTxt.accordian} title={languageTxt.disclaimer} subType={languageTxt.documentsAccordian} icon={{
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
                <CustomCard type={languageTxt.accordian} title={languageTxt.fatcaForm} subType={languageTxt.documentsAccordian} icon={{
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
                <CustomCard type={languageTxt.accordian} title={languageTxt.otherDocuments} subType={languageTxt.documentsAccordian} icon={{
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