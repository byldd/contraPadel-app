import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";
import SplashScreen from "@/src/screens/auth/splash";
import CustomButton from "@/src/components/button/customButton";

const index = () => {
  return (
    <>
      <SplashScreen />
    </>
  );
};

export default index;
