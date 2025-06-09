import { useState } from "react";
import { Text, StyleSheet, View, LayoutChangeEvent  } from "react-native";

interface Props {
    event: { title: string; icon: string };
}

const EventCard = ({event}: Props) => {

   const [CircleDiameter, setCircleDiameter] = useState(1);
   const [cardHeight, setCardHeight] = useState(1);
   const [cardWidth, setCardWidth] = useState(1);
   const [wordWidth, setWidth] = useState(1);
   const [wordHeight, setHeight] = useState(1);

	let wrapHeight: number;
	let vertMin: number;
	let horizMax: number;

   let iconFontSize = CircleDiameter* 0.57;

	const getSize = (element: string) => (e: LayoutChangeEvent) =>{
		const { height, width} = e.nativeEvent.layout;
		switch (element) {
			case "card":
				setCardHeight(height);
				setCardWidth(width);
				break;
			case "circle":
				setCircleDiameter(height);
				break;
			case "title":
				setWidth(width);
				setHeight(height);
				break;
		}}

	//if the horizontal layout fits we set minimum diameter
	if (cardWidth > wordWidth + 32)
		vertMin = Math.min(cardWidth - wordWidth - 32, cardHeight - 16);
	else
		vertMin = 0;
	wrapHeight = 20 + wordHeight + vertMin;
	if (cardHeight <= wrapHeight)
		horizMax = Math.min(vertMin, cardHeight - 16);
	else
		horizMax = cardHeight;

   	const dynamicStyles = StyleSheet.create({
		circle: {
		flex: 1,
		minHeight:  vertMin,
		maxHeight: horizMax,
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
    <View onLayout={getSize("card")} style={styles.EventCard}>
        <View onLayout={getSize("circle")} style={dynamicStyles.circle}>
			<View><Text style={dynamicStyles.icon}>{event.icon}</Text></View>
        </View>
        <Text onLayout={getSize("title")} style={styles.title}>{event.title}</Text>
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
		fontSize: 24,
		color: "white",
	},
});

export default EventCard;
