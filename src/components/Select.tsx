export const customStyles = {
  control: (styles: any, state: any) => ({
    ...styles,
    boxShadow: state.isFocused ? 0 : 0,
    borderColor: state.isFocused ? "#718096" : "hsl(0, 0%, 80%)",
    "&:hover": {
      borderColor: state.isFocused ? "#718096" : "hsl(0, 0%, 80%)",
    },
    minHeight: "2.25rem !important",
  }),
};
