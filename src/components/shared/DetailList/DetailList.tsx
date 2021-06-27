import React from 'react';
import {View, FlatList} from 'react-native';

import {styles} from './styles';
import {CustomCard} from '../CustomCard';
import {Paragraph, Title} from 'react-native-paper';

interface detailListProps {
  arrayList: any;
  interval: number;
  headerTitle: any;
  headerParagraph?: string;
}

const renderItem = ({item}: any) => (
  <View style={styles.menuCard}>
    <CustomCard type={'detail'} title={item.title} paragraph={item.paragraph} />
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
