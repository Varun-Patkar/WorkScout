import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Book = () => {
	const { id } = useLocalSearchParams();
	return (
		<View>
			<Text>Book No {id}</Text>
		</View>
	);
};

export default Book;
