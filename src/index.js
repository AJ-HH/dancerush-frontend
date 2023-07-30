import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme,responsiveFontSizes  } from "@mui/material/styles";

let theme = createTheme({

  palette: {
    main:{
      light: '#B3E3FF',
      primary: '#1976d2',
    },
    easy: {
      main: '#1DAD16'
    },
    normal: {
      main: '#FFA200'
    },
  },
  spacing: 4,
});
theme = responsiveFontSizes(theme);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
