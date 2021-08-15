import * as React from 'react';
import { View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { styles } from './styles';

export const TableComponent = ({ tableHeader, tableContent }: any) => {
    return (
        <View style={styles.tableContainer}>
                <Table borderStyle={styles.table}>
                    <Row data={tableHeader} style={styles.head} textStyle={styles.text} />
                    <Rows data={tableContent}  textStyle={styles.text} />
                </Table>
        </View>

    );
}