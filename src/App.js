import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import FourSevenEight from "./pages/FourSevenEight/FourSevenEight";
import ResonanceBreathing from "./pages/ResonanceBreathing/ResonanceBreathing";
import PursedLipBreathing from "./pages/PursedLipBreathing/PursedLipBreathing";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/478-breathing" component={FourSevenEight} />
        <Route
          exact
          path="/resonance-breathing"
          component={ResonanceBreathing}
        />
        <Route
          exact
          path="/pursed-lip-breathing"
          component={PursedLipBreathing}
        />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
