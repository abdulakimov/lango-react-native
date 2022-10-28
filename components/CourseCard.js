import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { IMAGES } from "../assets";
import { useNavigation } from "@react-navigation/native";

const CourseCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details")}
      activeOpacity={0.8}
      className="w-[40%] h-52 p-2 shadow-2xl m-5 bg-white rounded-xl"
    >
      <View className="w-full h-[50%] ">
        <Image
          source={IMAGES.target}
          resizeMode="cover"
          className="w-full h-full rounded-md"
        />
      </View>
      <Text>Past Simple</Text>
    </TouchableOpacity>
  );
};

export default CourseCard;
