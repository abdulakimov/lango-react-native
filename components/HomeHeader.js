import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { ICONS } from "../assets";
import { IMAGES } from "../assets";

const HomeHeader = () => {
  return (
    <View>
      <View className="flex flex-row justify-between items-center p-5">
        <TouchableOpacity>
          <Image
            source={ICONS.burger}
            resizeMode="contain"
            className="w-7 h-7"
          />
        </TouchableOpacity>
        {/* <Text className="text-lg font-bold text-center">LangGo</Text> */}
        <TouchableOpacity className="bg-white border-grey rounded-full shadow-xls">
          <Image
            source={IMAGES.user}
            resizeMode="contain"
            className="w-14 h-14 "
          />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center">
        <View className="bg-white w-[85%] flex-row rounded-full shadow-2xl">
          <Image
            source={ICONS.search}
            resizeMode="contain"
            className="w-6 h-6 m-4"
          />
          <TextInput
            onChange={() => {}}
            placeholder="Search..."
            className="w-full h-full"
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
