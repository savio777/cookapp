import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { MotiView } from "moti";

import { styles } from "./styles";
import { theme } from "../../styles/theme";

export function Header() {
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "timing", duration: 1500 }}
      style={styles.container}
    >
      <Feather name="arrow-left" color={theme.colors.brown} size={32} />

      <View>
        <Text style={styles.title}>Oriental Food</Text>

        <Text style={styles.subtitle}>Special Sushi</Text>
      </View>
    </MotiView>
  );
}
