import React from 'react';
import './App.css';
import { GlobalStyle } from './styles/global-styles';
import { createTheme, ThemeProvider } from '@mui/material';
import { ContainerWidget } from './widgets/containers/ContainerWidget';
import { getDashboardConfig, minimalWidgetConfiguration } from './configuration/dashboardConfig';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import useAsync from 'react-use/lib/useAsync';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      //main: "#383C45",
      main: '#AEDC84'
    },
    secondary: {
      main: "#AEDC84",
    },
  },
});


function App() {
  const state = useAsync(async () => {
    await new Promise(r => setTimeout(r, 1000))
    const dashboardConfig = await getDashboardConfig()
    return dashboardConfig
  }, [minimalWidgetConfiguration]);

  return (
    <div className="App">
      <GlobalStyle />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />                
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/*" element={<ContainerWidget props={state.value?.properties ?? minimalWidgetConfiguration}/>}>
                
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;

