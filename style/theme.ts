import { Theme } from "@emotion/react";

const palette = {
  black: "#000000",
  white: "#ffffff",
  green100: "#219653",
  green200: "#9BC88B",
  green300: "#AED7A0",
};

const themeLight: Theme = {
  colors: {
    // Background
    cardBackgroundColor: palette.green300,
    backgroundColor: palette.white,

    // Text
    textPrimary: palette.black,
    textSecondary: palette.white,

    // Pressable
    pressableBackgroundColor: palette.green300,
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
    cardBackgroundColor: palette.green200,
    backgroundColor: palette.black,

    // Text
    textPrimary: palette.white,
    textSecondary: palette.green100,

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
