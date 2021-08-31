import React from 'react';
import { Image, Text, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { styles } from './styles';
import { Cards } from '../../shared/CustomCard';
interface detailCardProps {
    title: any;
    paragraph?: any;
    middleContent?: any
}

export const IntroductionDetailsCard = ({ title, paragraph, middleContent }: detailCardProps) => {

    return (

        <Cards body={
            <Card.Content>
                {title && <Title style={styles.detailTitle}>{title}</Title>}
                <View style={styles.titleLine}></View>
                {paragraph && paragraph.map((v: any, i: any) => (
                    <>
                        <Paragraph style={styles.detailParagraph}>
                            {v?.description_p1}
                            {v?.description_p2}
                            {v?.description_p3}
                        </Paragraph>
                    </>
                ))}
                {middleContent && middleContent.map((v: any, i: any) => (
                    <View style={styles.middleContent}>
                        <Text style={styles.contentText}>{Object.keys(v)}</Text>
                        {Object.values(v)?.map((v: any, i: any) => (
                            v && v.map((v: any, i: any) => (
                                <>
                                    {Object.values(v)?.length === 3 ? Object.values(v)?.map((value: any, i: any) => (
                                        <View style={styles.contentTextContainer}>
                                            {i == 0 ? (<Text style={styles.contentSubText}>{value}</Text>) : (<><View style={styles.dotStyles}></View>
                                                <Text style={styles.contentText2}>{value}</Text></>)}
                                        </View>))
                                        : Object.values(v)?.map((value: any, i: any) => (

                                            <View style={styles.contentTextContainer}>
                                                <View style={styles.dotStyles}></View>
                                                <Text style={styles.contentText2}>{value}</Text>
                                            </View>
                                        ))}
                                </>
                            ))
                        ))}
                    </View>
                ))}

            </Card.Content>

        } />


    )
}