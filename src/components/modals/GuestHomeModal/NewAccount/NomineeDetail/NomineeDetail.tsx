import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { colorConstants } from '../../../../../utils/colorConstants';
import { languageTxt } from '../../../../../utils/languageTxt';
import RightArrow from '../../../../../assets/icons/new_account/rightArrow.svg';
import CustomFormInput from '../../../../shared/CustomFormInput';
import { styles } from './styles';
import { List } from 'react-native-paper';
import Positive from '../../../../../assets/icons/new_account/whitepositive.svg'
import Negative from '../../../../../assets/icons/new_account/whitenegative.svg'

export const NomineeDetail = ({title} : any) => {

    const [expanded, setExpanded] = React.useState(false);

    const handlePress = () => setExpanded(!expanded);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <List.Section >
                    <List.Accordion
                        title={title}
                        style={styles.card}
                        titleStyle={styles.titleStyle}
                        right={expanded ? () => (<Negative width={'20'}
                            height={'20'}
                            fill={colorConstants.white} />) : () => (<Positive width={'20'}
                                height={'20'}
                                fill={colorConstants.white} />)}
                        expanded={expanded}
                        onPress={handlePress}>
                            <View style={styles.accordianContainer}>
                        <CustomFormInput placeHolder={languageTxt.name} />
                        <View style={styles.accordianRow}>
                        <View style={styles.row2input1}>
                        <CustomFormInput type={languageTxt.numeric} placeHolder={languageTxt.cnic} />
                        </View>
                        <View style={styles.row2input2}>
                        <CustomFormInput placeHolder={languageTxt.expiryDate} RightIcon={() => (<RightArrow width={'10'}
                            height={'10'}
                            fill={colorConstants.black} />)} />
                        </View>
                        </View>
                        <CustomFormInput placeHolder={languageTxt.fatherName} />
                        <CustomFormInput placeHolder={languageTxt.nomineeRelation} />
                        <CustomFormInput placeHolder={languageTxt.stAddress} />
                        <View style={styles.accordianRow}>
                        <View style={styles.row3input1}>
                        <CustomFormInput placeHolder={languageTxt.city} RightIcon={() => (<RightArrow width={'20'}
                            height={'20'}
                            fill={colorConstants.black} />)} />
                            </View>
                            <View style={styles.row3input2}>
                        <CustomFormInput placeHolder={languageTxt.country} RightIcon={() => (<RightArrow width={'20'}
                            height={'20'}
                            fill={colorConstants.black} />)} />
                            </View>
                            </View>
                            <View style={styles.accordianRow}>
                        <View style={styles.row3input1}>
                        <CustomFormInput placeHolder={languageTxt.mobileNumber} />
                        </View>
                        <View style={styles.row3input2}>
                        <CustomFormInput placeHolder={languageTxt.telephoneNumber} />
                        </View>
                        </View>
                        <CustomFormInput placeHolder={languageTxt.email} />
                        </View>
                    </List.Accordion>
                </List.Section>


            </View>
        </ScrollView>

    )
}