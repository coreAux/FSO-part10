import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "hsl(300, 100%, 20%)",
    primary: "#0366d6",
    purple: "hsl(300, 100%, 25%)",
    purpleMedium: "hsl(320, 60%, 75%)",
    purpleLight: "hsl(300, 100%, 95%)",
    disabledPurple: "hsl(300, 20%, 25%)",
    disabledPurpleMedium: "hsl(320, 20%, 75%)",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System"
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
