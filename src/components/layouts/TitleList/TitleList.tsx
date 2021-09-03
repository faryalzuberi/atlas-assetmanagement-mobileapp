import React from 'react';
import { View, FlatList } from 'react-native';
import { ListCardLayout } from '../CardLayout';
import { styles } from './styles';
import { NewAccountAcordian } from '../AccordianCardLayout';
import { HeaderCardLayout } from '../CardLayout'

interface titleListProps {
  icon: any;
  title: string;
  arrayList: any;
  interval: number;
}

const renderItem = ({ item }: any) => (
  <View style={styles.menuCard}>
    {(item?.type) ?
      <NewAccountAcordian  title={item?.title} path={item?.path} icon={item?.icon} paragraph={item?.description} subTitle={item?.subTitle} subTitleDescription={item?.subTitleDescription} titleNumberOfLines={item?.titleNumberOfLines} /> :
      <ListCardLayout  title={item.title} path={item.path}   />
    }

  </View>
);

const renderHeader = ({ title, icon }: any) => (
  <View style={styles.header}>
    <HeaderCardLayout
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
      ListHeaderComponent={() => renderHeader({ title, icon })}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
