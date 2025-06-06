import { useEffect, useState, ReactNode } from "react";
import { Text, StyleSheet, View } from "react-native";

interface Props {
    children: ReactNode;
    size: number;
}
const Icon = ({children, size}: Props) => {

    
    //for correction
    var font = size * 0.57;
    const dynamicStyles = StyleSheet.create({
	icon: {
		flex: 1,
		height: "100%",
		fontSize: font,
        alignSelf: "center",
		flexShrink: 1,
        fontWeight: 700, 
        fontFamily: "Times New Roman"
	},
	})
    return(<View><Text style={dynamicStyles.icon}>{children}</Text></View>

    )
}

export default Icon;