import { Theme } from "@emotion/react";

const palette = {
  black: "#2a2a2a",
  white: "#fefefe",
  green100: "#219653",
  green200: "#9BC88B",
  green300: "#AED7A0",
};

const themeLight: Theme = {
  colors: {
    // Background
    cardBackgroundColor: palette.green300,
    backgroundColor: palette.white,
    iconBackgroundColor: palette.green100,

    // Text
    textPrimary: palette.black,
    textSecondary: palette.white,

    // Pressable
    pressableBackgroundColor: palette.green300,

    //Icon
  },
  fontSize: {
    xxl: "24px",
    xl: "20px",
    lg: "18px",
    md: "16px",
    base: "14px",
    sm: "12px",
  },
  fontWeight: {
    bold: "700",
    normal: "600",
    light: "500",
  },
};

const themeDark: Theme = {
  colors: {
    // Background
    cardBackgroundColor: palette.green300,
    backgroundColor: palette.black,
    iconBackgroundColor: palette.green100,

    // Text
    textPrimary: palette.white,
    textSecondary: palette.black,

    // Pressable
    pressableBackgroundColor: palette.green200,
  },
  fontSize: {
    ...themeLight.fontSize,
  },
  fontWeight: {
    ...themeLight.fontWeight,
  },
};

export { themeLight, themeDark };
