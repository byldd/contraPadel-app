import React from "react";
import ScreenWrapper from "../../../components/layouts/screenWrapper/screenWrapper";
import Header from "../../../components/header";
import CustomButton from "../../../components/button/customButton";
import { router } from "expo-router";
import { ROUTES } from "@/src/navigation/routes";

const RegisterScreen = () => {
  return (
    <ScreenWrapper>
      <Header title={"SIGN UP"} hideBackButton />
      <CustomButton
        rounded
        disabled
        title="Create account"
        onPress={() => router.push(ROUTES.HOME)}
      />
      <CustomButton
        rounded
        outlined
        title="LOGIN"
        onPress={() => router.push(ROUTES.LOGIN)}
      />
    </ScreenWrapper>
  );
};

export default RegisterScreen;
