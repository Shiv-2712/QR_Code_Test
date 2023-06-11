import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d5e1ef",
      }}
    >
      <View
        style={{
          padding: 16,
          height: 450,
          width: 300,
          borderRadius: 20,
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./images/image-qr-code.png")}
          style={{ height: 250, width: 270, borderRadius: 20 }}
        />
        <Text
          style={{
            padding: 20,
            fontSize: 18,
            fontWeight: 900,
            textAlign: "center",
          }}
        >
          Improve your front-end skills by building projects
        </Text>
        <Text style={{ textAlign: "center", color: "grey", fontSize: 14.5 }}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
