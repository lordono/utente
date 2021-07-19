export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: "fullscreen",
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#eeeeee"
      },
      {
        name: "dark",
        value: "#2c2f33"
      }
    ]
  }
};
