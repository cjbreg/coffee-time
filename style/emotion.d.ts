import "@emotion/react";

// You are also able to use a 3rd party theme this way:
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      cardBackgroundColor: string;
      backgroundColor: string;
      textPrimary: string;
      textSecondary: string;
      pressableBackgroundColor: string;
    };
    fontSize: {
      xxl: string;
      xl: string;
      lg: string;
      md: string;
      base: string;
      sm: string;
    };
    fontWeight: {
      bold: string;
      normal: string;
      light: string;
    };
  }
}

declare module "@emotion/react" {
  export interface Theme extends Record<string, any> {}
}
