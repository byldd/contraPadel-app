import { Button } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/layouts/screenWrapper/screenWrapper";
import Header from "../../components/header";
import { router } from "expo-router";
import { ROUTES } from "@/src/navigation/routes";

const ProfileScreen = () => {
  return (
    <ScreenWrapper scrollEnabled headerComponent={<Header title={"PROFILE"} />}>
      <Button title="Home" onPress={() => router.push(ROUTES.HOME)} />
    </ScreenWrapper>
  );
};

export default ProfileScreen;
