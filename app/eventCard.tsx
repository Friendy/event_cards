import { useEffect, useState, ReactNode } from "react";
import { Text, StyleSheet, View, LayoutChangeEvent  } from "react-native";
import Icon from "./icon";

interface Props {
    event: { title: string; icon: string };
}

const EventCard = ({event}: Props) => {

   const [d, setD] = useState(1);
   const [h, setH] = useState(1);

	const getHeight = (card: boolean) => (e: LayoutChangeEvent) =>{
		const { height} = e.nativeEvent.layout;
        card ? setH(height) : setD(height);
		// console.log("h:", height);
        // console.log("s:", d);}
	}

   	const dynamicStyles = StyleSheet.create({
		circle: {
		flex: 1,
		// minHeight: h - 16,
		// minWidth: h - 16,
		// margin: 1,
		// width: d,
		// height: d,
		// maxHeight: "70%",
		backgroundColor: "white",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		alignContent:"center",
		aspectRatio: 1,
		borderRadius: d/2,
		borderColor: "#747474",
		borderWidth: 1,

		// gap:2,
		// padding: 9,
		// resizeMode: 'center',
	},
	title:{
		// backgroundColor: "green",
		fontFamily: "Lexend_700Bold",
        fontWeight: 700,
		fontSize: 24,
		color: "white",
        // fontStyle: "italic"
	},
});


  return (
    <View onLayout={getHeight(true)} style={styles.card}>
        <View onLayout={getHeight(false)} style={dynamicStyles.circle}>
            <Icon size={d}>{event.icon}</Icon>
        </View>
        <Text style={dynamicStyles.title}>{event.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
	card: {
		flex: 1,
		width: "100%",
		backgroundColor: "#755AFF",
		flexDirection: "column",
		alignItems: "center",
		alignContent: "center",
		justifyContent: "center",
        minHeight: 52,
        rowGap: 4,
        columnGap: 16,
		// paddingTop: 8,
        // paddingBottom:8,
        paddingVertical: 8,
        paddingHorizontal: 8,
        // paddingLeft:2,
		flexWrap: "wrap",
		borderRadius: 20,
	},
	
});

export default EventCard;
