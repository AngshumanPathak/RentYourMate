import { Tabs, Redirect } from "expo-router";
import { View, Image, Text } from "react-native";
import React from "react";
import { icons } from "../../../constants/icons";
import TopNavBar from "../components/TopNavBar";
import { LinearGradient } from "expo-linear-gradient";


const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <>
        
          <Image source={icon} className="size-10" />
       
        <Text className="text-white ml-2">{title}</Text>
      </>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-10" />
      <Text className="text-violet-800 ml-2">{title}</Text>
    </View>
  );
};

const TabLayout = () => {
  
  return (
    <>
      <TopNavBar />

      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarItemStyle: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 18,
          },
          tabBarStyle: {
            backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 10,
          height: 56,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Find",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.search}  />
            ),
          }}
        />
        <Tabs.Screen
          name="Matches"
          options={{
            title: "Matches",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.match} />
            ),
          }}
        />
        <Tabs.Screen
          name="TopPicks"
          options={{
            title: "Rent",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.rent} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.profile}/>
            ),
          }}
        />
        
      </Tabs>
    </>
  );
};

export default TabLayout;
