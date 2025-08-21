import { COLORS } from "@/assets/styles/colors";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeScreen = ({ children }: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: COLORS.background,
        flex: 1,
        paddingTop: insets.top,
      }}
    >
      {children}
    </View>
  );
};

export default SafeScreen;
