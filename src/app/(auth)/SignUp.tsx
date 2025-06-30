import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "../../../constants/icons";
import { images } from "../../../constants/images";

export default function SignUp() {
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const router = useRouter();

  const handleLinkPress = (url: string) => {
    console.log("Link pressed");
  };

  const handleSignUpPress = () => {
    router.push("./VerifyOTP");
  };
  return (
    <ScrollView className="h-full w-full bg-black">
      {/* Background Image */}
      <Image
        source={images.loginBG}
        className="absolute z-5"
        resizeMode="cover"
      />

      {/* Main View */}
      <View className="flex-1 justify-center z-10 mt-20">
        {/* Headers and Logos */}
        <View>
          <Text className="text-center text-white text-[25px] font-playfair-semibold">
            Start finding your match
          </Text>
        </View>

        {/* Inputs */}
        <View>
          <TextInput
            className="bg-pink-300 rounded-lg p-4 m-4"
            placeholder="Enter your name"
            placeholderTextColor="#6b7280" // Tailwind's gray-500 hex
          />
          <TextInput
            className="bg-pink-300 rounded-lg p-4 m-4"
            placeholder="Enter your email"
            placeholderTextColor="#6b7280" // Tailwind's gray-500 hex
          />
          <TextInput
            className="bg-pink-300 rounded-lg p-4 m-4"
            placeholder="Create a password"
            secureTextEntry={true}
            placeholderTextColor="#6b7280" // Tailwind's gray-500 hex
          />
        </View>

        {/* Terms and Conditions */}
        <View className="flex-row items-start p-4">
          <Pressable
            onPress={() => setTermsAccepted(!termsAccepted)}
            className="mr-2 mt-1"
          >
            <View className="w-5 h-5 rounded-sm border border-white items-center justify-center">
              {termsAccepted && (
                <Text className="text-black text-xs bg-primary-500">✔️</Text>
              )}
            </View>
          </Pressable>
          <Text className="text-white flex-1 text-base">
            I have read and agreed to the{" "}
            <Text
              className="text-purple-400 underline"
              onPress={() => handleLinkPress("https://xongroh.com/privacy")}
            >
              Privacy Policy
            </Text>
            ,{" "}
            <Text
              className="text-purple-400 underline"
              onPress={() => handleLinkPress("https://xongroh.com/terms")}
            >
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text
              className="text-purple-400 underline"
              onPress={() => handleLinkPress("https://xongroh.com/guidelines")}
            >
              Community Guidelines
            </Text>
            .
          </Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          className="bg-pink-500 rounded-lg p-4 m-4"
          onPress={() => handleSignUpPress()}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-100 bg-pink-500 rounded-lg p-4 m-4 flex-row justify-center relative">
          <Image
            className="w-6 h-6 absolute top-4 left-20"
            source={icons.googleLogo}
          />
          <Text className="text-white text-center text-lg font-semibold">
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
