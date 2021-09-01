import React from 'react';
import {View, FlatList} from 'react-native';
import { IntroductionDetailsCard } from '../../layouts/CardLayout';
import {styles} from './styles';
import { DetailsCardLayout } from '../../layouts/CardLayout';
import {Paragraph, Title} from 'react-native-paper';

interface detailListProps {
  arrayList: any;
  interval: number;
  headerTitle: any;
  headerParagraph?: string;
}

const renderItem = ({item}: any) => (
  <View style={styles.menuCard}>
    {item?.type === 'Introduction' ? <IntroductionDetailsCard title={item?.heading} paragraph={item?.description} middleContent={item?.middleContent}  /> : <DetailsCardLayout
      title={item?.name}
      designation={item?.designation && item.designation}
      profile_image={item?.profile_image && item.profile_image}
      paragraph={ item?.description}
    /> }
  </View>
);

const renderHeader = ({headerTitle, headerParagraph}: any) => (
  <View style={styles.header}>
    <Title style={styles.headerTitle}>{headerTitle}</Title>
    <View style={styles.titleLine}></View>
    {headerParagraph && (
      <Paragraph style={styles.headerParagraph}>{headerParagraph}</Paragraph>
    )}
  </View>
);

export const DetailList = ({
  arrayList,
  interval,
  headerTitle,
  headerParagraph,
}: detailListProps) => {
  return (
    <FlatList
      style={styles.flatList}
      data={arrayList}
      numColumns={interval}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={() => renderHeader({headerTitle, headerParagraph})}
    />
  );
};
