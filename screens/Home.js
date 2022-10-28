import { View, Text, StatusBar, Image, ScrollView } from "react-native";
import HomeHeader from "../components/HomeHeader";

import { ICONS } from "../assets";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-[#f1f2f4] "
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <HomeHeader />
      <Courses />
    </ScrollView>
  );
};

export default Home;
