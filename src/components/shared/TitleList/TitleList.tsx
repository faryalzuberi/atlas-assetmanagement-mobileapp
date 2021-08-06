import React from 'react';
import {View, FlatList} from 'react-native';

import {styles} from './styles';
import {CustomCard} from '../CustomCard';

interface titleListProps {
  icon: any;
  title: string;
  arrayList: any;
  interval: number;
}

const renderItem = ({item}: any) => (
  <View style={styles.menuCard}>
     <CustomCard type={(item?.type)? 'accordian':'list'} title={item.title} path={item.path} icon={item.icon} paragraph={item.description} subTitle={item.subTitle} subTitleDescription={item.subTitleDescription} titleNumberOfLines={item.titleNumberOfLines} />
  </View>
);

const renderHeader = ({title, icon}: any) => (
  <View style={styles.header}>
    <CustomCard
      type={'header'}
      title={title ? title : ''}
      icon={icon ? icon : <></>}
    />
  </View>
);

export const TitleList = ({
  icon,
  title,
  arrayList,
  interval,
}: titleListProps) => {
  return (
    <FlatList
      style={styles.flatList}
      data={arrayList}
      numColumns={interval}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      ListHeaderComponent={() => renderHeader({title, icon})}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
