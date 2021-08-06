import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from './styles';
interface RadioButtonProps {
    title: string;
    arrayList: any,
    handleChange: any;

}

const RadioButton = ({ onPress, selected, children }: any) => {
    return (
        <View style={styles.radioButtonContainer}>
            <TouchableOpacity onPress={onPress} style={styles.radioButton}>
                {selected ? <View style={styles.radioButtonIcon} /> : null}
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.radioButtonText}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
};

export const CustomRadioButton = ({ title, arrayList, handleChange }: RadioButtonProps) => {
    const [value, setValue] = useState<any>(arrayList);
    const onRadioBtnClick = (item: any) => {
        let updatedState = value && value.map((val: any) =>
            val?.id === item?.id
                ? { ...val, selected: true }
                : { ...val, selected: false }
        );

        setValue(updatedState);
    };
    return (
        <View style={styles.app}>
            <Text style={styles.text}>{title}</Text>
            <View style={{ flexDirection: "row", flexWrap: 'wrap', flex: 1 }}>
                {value && value.map((item: any) => (
                    <RadioButton
                        onPress={() => { onRadioBtnClick(item); handleChange(item?.value) }}
                        selected={item?.selected}
                        key={item?.id}
                    >
                        {item?.name}
                    </RadioButton>
                ))}
            </View>
        </View>
    );
};