export const breakpoints = {
  xs: "(max-width: 567px)",
  sm: "(max-width: 768px)",
  md: "(max-width: 992px)",
  lg: "(max-width: 1200px)",
  xl: "(max-width: 1400px)",
};

const palette = {
  primary: {
    main: "#0F1624",
  },
  drawer: {
    main: "#ffffff",
    secondary: "#ffffff22",
  },
  text: {
    main: "hsl(204,23.8%,95.9%)",
  },
  white: {
    main: "#ffffff",
  },
  black: {
    main: "#000000",
  },
  error: {
    dark: "#ff2929",
  },
};

const zIndex = {
  drawer: 50,
  drawerSecondaryBackground: -1,
  drawerToggle: 51,
};

export const theme = {
  palette,
  zIndex,
  breakpoints,
};
