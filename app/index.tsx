import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
	const dummyEvents: { title: string; icon: string }[] = [];
	dummyEvents.push({ title: "Feier", icon: "🎉" });
	dummyEvents.push({ title: "Football", icon: "🏈" });
	dummyEvents.push({ title: "Nachtisch", icon: "🍨" });
	dummyEvents.push({ title: "Halloween", icon: "🎃" });
	dummyEvents.push({ title: "Werkstatt", icon: "🪚" });

	return (
		<View style={styles.column}>
			<View style={styles.dummy} />
			<View style={styles.dummy} />
			<View style={styles.dummy} />
			<View style={styles.dummy} />
			<View style={styles.dummy} />
		</View>
	);
}

const styles = StyleSheet.create({
	column: {
		alignSelf: "center",
		flexDirection: "column",
		width: "25%",
		height: "90%",
		borderRadius: 12,
		backgroundColor: "#191F27",
		marginTop: 24,
		padding: 32,
		gap: 12,
		overflow: "hidden",
	},
	dummy: {
		flex: 1,
		width: "100%",
		backgroundColor: "red",
		flexDirection: "column",
		alignItems: "center",
		gap: 4,
		padding: 6,
	},
});
