import * as React from 'react';
import { View } from 'react-native';
import { Table,TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { styles } from './styles';


export const TableComponent = ({ tableHeader, tableContent, tableCol }: any) => {
    return (
        <View style={styles.tableContainer}>
            <Table borderStyle={styles.table}>
                <Row data={tableHeader} style={styles.head} textStyle={styles.text} />
                <TableWrapper style={styles.wrapper}>
                    <Col data={tableCol} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                    <Rows data={tableContent} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
                </TableWrapper>
                <Rows data={tableContent} textStyle={styles.text} />
            </Table>
        </View>

    );
}
