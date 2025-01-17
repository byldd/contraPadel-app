import React, { memo } from "react";
import {
  ImageBackground,
  RefreshControl,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { commonStyles } from "../../../styles/commonStyles";
import { theme } from "../../../infrastructure/theme";
import { Images } from "@/assets/images";

const ScreenWrapper = ({
  children,
  style,
  extraHeight = 100,
  scrollEnabled = false,
  paddingHorizontal,
  safeAreaStyle,
  onRefresh,
  refreshing,
  headerComponent,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
  extraHeight?: number;
  scrollEnabled?: boolean;
  paddingHorizontal?: boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
  headerComponent?: React.ReactNode;
}) => {
  if (scrollEnabled) {
    return (
      <ImageBackground
        style={[commonStyles.fullFlex]}
        source={Images.bg1}
        resizeMode="stretch"
      >
        <SafeAreaView style={[commonStyles.fullFlex, safeAreaStyle]}>
          {headerComponent && headerComponent}
          <KeyboardAwareScrollView
            refreshControl={
              onRefresh ? (
                <RefreshControl
                  refreshing={refreshing ?? false}
                  onRefresh={onRefresh}
                  colors={[theme.colors.ui.primary]}
                  tintColor={theme.colors.ui.primary}
                />
              ) : undefined
            }
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            extraHeight={extraHeight}
            enableOnAndroid={true}
            keyboardOpeningTime={0}
          >
            <View
              style={[
                commonStyles.fullFlex,
                paddingHorizontal && commonStyles.ph16,
                style,
              ]}
            >
              {children}
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      style={[commonStyles.fullFlex]}
      source={Images.bg}
      resizeMode="stretch"
    >
      <SafeAreaView style={[commonStyles.fullFlex]}>
        <View
          style={[
            commonStyles.fullFlex,
            paddingHorizontal && commonStyles.ph16,
            style,
          ]}
        >
          {children}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default memo(ScreenWrapper);
