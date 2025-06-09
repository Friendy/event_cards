import { useEffect, useState, ReactNode } from "react";
import { Text, StyleSheet, View, LayoutChangeEvent  } from "react-native";

interface Props {
    event: { title: string; icon: string };
}



const EventCard = ({event}: Props) => {

   const [circleD, setCircleD] = useState(1);
   const [cardHeight, setCardHeight] = useState(1);
   const [cardWidth, setCardWidth] = useState(1);
   const [wordWidth, setWidth] = useState(1);
   const [wordHeight, setHeight] = useState(1);
//    const [maxD, setMaxD] = useState(cardHeight);
// 	const [minD, setMinD] = useState(0);
	let wrapHeight: number;
	let vertMin: number;
	let horizMax: number;

   var font = circleD* 0.57;
// var minD = cardHeight - 16;
	// if (cardWidth > wordWidth + 32)
	// 	minD = Math.min(cardWidth - wordWidth - 32, cardHeight - 16);
	// else
	// 	minD = cardHeight - 16;
	// var midHeight = 20 + wordHeight + minD;
	// var maxD;
// var midHeight = 0;

	const getSize = (element: string) => (e: LayoutChangeEvent) =>{
		const { height, width} = e.nativeEvent.layout;
		switch (element) {
			case "card":
				setCardHeight(height);
				setCardWidth(width);
				
				
				// if (width > wordWidth + 32)
				// 	setMinD(Math.min(width - wordWidth - 32, height - 16));
				// else
				//  	setMinD(0);

				//if card heights is less that wrap height
				// if (cardHeight < midHeight)
				// {
				// 	console.log("not set", maxD , "min d is", minD);
				// 	setMaxD(minD);
				// 	setMinD(0);
				// 	console.log("max D is set", maxD , "min d is", minD);
				// }
				// else(setMinD(0))
				// console.log("card:", width, height)
				break;
			case "circle":
				setCircleD(height);
				console.log("circle:", width, height);
				break;
			case "title":
				setWidth(width);
				setHeight(height);
				console.log("title:", width);
				console.log("title:", height);
				break;
		}}

	//if the horizontal layout fits we set minimum diameter
	console.log("before formula", cardWidth, wordWidth, cardHeight );
	if (cardWidth > wordWidth + 32)
		vertMin = Math.min(cardWidth - wordWidth - 32, cardHeight - 16);
	else
		vertMin = 0;
	wrapHeight = 20 + wordHeight + vertMin;
	if (cardHeight <= wrapHeight)
		horizMax = Math.min(vertMin, cardHeight - 16);
	else
		horizMax = cardHeight;
	console.log("card size", cardWidth, cardHeight);
	console.log("vert min", vertMin)
	console.log("horiz max", horizMax)
	// s = test.toString() + "%";
	// console.log("string test", test.toString() + "%")
	// if (cardHeight < midHeight)
	// 	setMaxD(minD);
	// console.log("minD", minD);
	// console.log("maxD", maxD);
	// console.log("minHor:", cardWidth - wordWidth - 32);
	// console.log("minVert:", cardHeight - 16);
	// console.log("realD:", circleD);
	// console.log("midHeight:", midHeight);
	// var percent = minD * 100/cardHeight;
	// if (circleD <= minD)
	// {minD = 0;
	//  maxh = cardWidth - wordWidth - 32;}
   	const dynamicStyles = StyleSheet.create({
		circle: {
		flex: 1,
		minHeight:  vertMin,
        // maxHeight: "70%",
		// minHeight: ,
		maxHeight: horizMax,
		// maxHeight: maxh,
		// minWidth: cardHeight - 16,
		// minWidth: minCircleHeight,
		// minWidth: cardHeight - 16
		// margin: 1,
		// width: d,
		// height: d,
		// maxHeight: "70%",
		backgroundColor: "white",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		alignContent: "center",
		aspectRatio: 1,
		borderRadius: circleD/2,
		borderColor: "#747474",
		borderWidth: 1,

		// gap:2,
		// padding: 9,
		// resizeMode: 'center',
	},
	title:{
		// backgroundColor: "green",
		fontFamily: "Lexend_700Bold",
        // fontWeight: 700,
		fontSize: 24,
		color: "white",
        // fontStyle: "italic"
	},
	icon: {
		flex: 1,
		height: "100%",
		fontSize: font,
        alignSelf: "center",
		flexShrink: 1,
        fontWeight: 700, 
        fontFamily: "Times New Roman"
	},
	
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
        padding: 8,
		flexWrap: "wrap",
		borderRadius: 20,
	},
});


  return (
    <View onLayout={getSize("card")} style={dynamicStyles.card}>
        <View onLayout={getSize("circle")} style={dynamicStyles.circle}>
			<View><Text style={dynamicStyles.icon}>{event.icon}</Text></View>
        </View>
        <Text onLayout={getSize("title")} style={dynamicStyles.title}>{event.title}</Text>
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
        paddingVertical: 8,
        paddingHorizontal: 8,
		flexWrap: "wrap",
		borderRadius: 20,
	},
	
});

export default EventCard;
