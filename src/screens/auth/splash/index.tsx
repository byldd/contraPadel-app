import React from "react";
import ScreenWrapper from "../../../components/layouts/screenWrapper/screenWrapper";
import CustomButton from "../../../components/button/customButton";
import { Column, Row } from "../../../components/tools";
import { commonStyles } from "../../../styles/commonStyles";
import { ROUTES } from "@/src/navigation/routes";
import { router } from "expo-router";

const SplashScreen = () => {
  return (
    <ScreenWrapper>
      <Column justifyContent="center" style={[commonStyles.fullFlex]}>
        <CustomButton
          rounded
          title="REGISTER"
          onPress={() => router.push(ROUTES.REGISTER)}
        />
        <CustomButton
          rounded
          title="HOME"
          outlined
          onPress={() => router.push(ROUTES.HOME)}
        />
        <Row justifyContent="space-between">
          <CustomButton
            rounded
            title="LOGIN"
            small
            halfWidth
            onPress={() => router.push(ROUTES.LOGIN)}
          />
          <CustomButton
            rounded
            title="LOGIN"
            outlined
            small
            halfWidth
            onPress={() => router.push(ROUTES.LOGIN)}
          />
        </Row>
        <Row justifyContent="space-between">
          <CustomButton
            title="LOGIN"
            outlined
            small
            halfWidth
            onPress={() => router.push(ROUTES.LOGIN)}
          />
          <CustomButton
            title="LOGIN >"
            small
            halfWidth
            onPress={() => router.push(ROUTES.LOGIN)}
          />
        </Row>
      </Column>
    </ScreenWrapper>
  );
};

export default SplashScreen;
