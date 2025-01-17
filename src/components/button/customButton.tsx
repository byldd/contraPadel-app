import React, { memo, useMemo } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../infrastructure/theme";
import { commonStyles } from "../../styles/commonStyles";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";
interface ICustomButton {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  small?: boolean;
  loading?: boolean;
  outlined?: boolean;
  halfWidth?: boolean;
  rounded?: boolean;
}

const CustomButton = ({
  title = "",
  onPress,
  loading = false,
  outlined = false,
  disabled = false,
  small = false,
  halfWidth,
  rounded,
}: ICustomButton) => {
  const buttonStyle = useMemo(
    () => [
      styles.button,
      small && styles.small,
      halfWidth && commonStyles.halfWidth,
      disabled && styles.disabled,
      outlined && styles.outlined,
      rounded && styles.rounded,
    ],
    [small, disabled, outlined, halfWidth, rounded]
  );
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      {outlined ? (
        <View style={buttonStyle}>
          {loading ? (
            <ActivityIndicator size={18} color={theme.colors.ui.primary} />
          ) : (
            <Text style={[styles.text]}>{title}</Text>
          )}
        </View>
      ) : (
        <LinearGradient
          start={{ x: 0.0, y: 0.9 }}
          end={{ x: 1.5, y: 0.5 }}
          locations={[0, 0.6]}
          colors={["#BA1924", "#6F356D"]}
          style={buttonStyle}
        >
          {loading ? (
            <ActivityIndicator size={18} color={theme.colors.ui.white} />
          ) : (
            <Text style={[styles.text]}>{title}</Text>
          )}
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default memo(CustomButton);
