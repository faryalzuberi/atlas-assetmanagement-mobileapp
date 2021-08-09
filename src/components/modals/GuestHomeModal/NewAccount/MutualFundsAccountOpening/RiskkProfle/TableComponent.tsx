import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { styles } from './styles';

export const TableComponent = ({ tableHeader, tableContent }: any) => {
    return (
        
            <DataTable style={styles.table}>
            
               <Text>
                    {tableHeader && tableHeader.map((item: any) => (
                        
                         <DataTable.Header style={{flex: 1, flexDirection: 'row',}}>
                        <DataTable.Title key={item?.key}>{item?.value}</DataTable.Title>
                        </DataTable.Header>
                    ))}
                -

                    {tableContent && tableContent.map((item: any) => (
                      
                        <DataTable.Row>
                        <DataTable.Cell key={item?.key}>{item?.rowValue1}</DataTable.Cell>
                        <DataTable.Cell key={item?.key}>{item?.rowValue2}</DataTable.Cell>
                        <DataTable.Cell key={item?.key}>{item?.rowValue3}</DataTable.Cell>
                        <DataTable.Cell key={item?.key}>{item?.rowValue4}</DataTable.Cell>
                        </DataTable.Row>
                     
                    ))}
                    </Text>
                    
              
            </DataTable>
           
    
    );
}