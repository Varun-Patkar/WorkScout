import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text className="font-bold text-3xl my-10 font-rubik">
				Welcome to WorkScout!
			</Text>
			<Link href="/sign-in">Sign In</Link>
			<Link href="/explore">Explore</Link>
			<Link href="/profile">Profile</Link>
			<Link href="/books/1">Book No. 1</Link>
		</View>
	);
}
