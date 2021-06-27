import React from 'react';
import {View, FlatList, SectionList} from 'react-native';

import {styles} from './styles';
import {CustomCard} from '../CustomCard';
import {languageTxt} from '../../../utils/languageTxt';
import {Header} from 'react-native/Libraries/NewAppScreen';

interface dashboardListProps {
  arrayList: any;
  interval: number;
  header?: any;
}

const renderItem = ({item}: any) => (
  <View style={styles.menuCard}>
    <CustomCard
      type={'dashboard'}
      title={item.title}
      icon={item.icon}
      path={item.path}
    />
  </View>
);

export const DashboardList = ({
  arrayList,
  interval,
  header,
}: dashboardListProps) => {
  return (
    <FlatList
      style={styles.flatList}
      data={arrayList}
      numColumns={interval}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={() => (header ? header : <></>)}
    />
  );
};
