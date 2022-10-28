import { View, Text, ScrollView } from "react-native";
import React from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <View className="mt-10 flex-1 flex-row ">
      <CourseCard />
      <CourseCard />
    </View>
  );
};

export default Courses;
