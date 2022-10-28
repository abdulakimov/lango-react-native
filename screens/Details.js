import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Details = ({ navigation }) => {
  return (
    <View className=" flex-1 justify-center items-center">
      <Text className="text-xl font-bold">Nimaga Gap Jahongir aka 🖐</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-xl font-bold">Orqaga</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
