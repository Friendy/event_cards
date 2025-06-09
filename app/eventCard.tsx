import { useState } from "react";
import { Text, StyleSheet, View, LayoutChangeEvent  } from "react-native";

interface Props {
    event: { title: string; icon: string };
}

const EventCard = ({event}: Props) => {

   const [CircleDiameter, setCircleDiameter] = useState(1);

   let iconFontSize = CircleDiameter* 0.57;

	const getSize = (e: LayoutChangeEvent) =>{
		const { height } = e.nativeEvent.layout;
			setCircleDiameter(height);
		}

   	const dynamicStyles = StyleSheet.create({
		circle: {
			flex: 1,
			backgroundColor: "white",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			alignContent: "center",
			aspectRatio: 1,
			borderRadius: CircleDiameter/2,
			borderColor: "#747474",
			borderWidth: 1,
	},
		icon: {
			flex: 1,
			height: "100%",
			fontSize: iconFontSize,
			alignSelf: "center",
			flexShrink: 1,
			fontWeight: 700, 
			fontFamily: "Times New Roman"
	},
});

  return (
    <View style={styles.EventCard}>
        <View onLayout={getSize} style={dynamicStyles.circle}>
			<View><Text style={dynamicStyles.icon}>{event.icon}</Text></View>
        </View>
        <Text style={styles.title}>{event.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
	EventCard: {
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
        padding: 8,
		flexWrap: "wrap",
		borderRadius: 20,
	},
	title:{
			fontFamily: "Lexend_700Bold",
			fontWeight: 700,
			fontSize: 24,
			color: "white",
	},
});

export default EventCard;
