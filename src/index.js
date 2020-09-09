import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import Routes from './routes';

export const ThemeContext = createContext();

const Root = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <AppContainer className={isDark ? "dark-mode" : ""}>
        <Routes />
      </AppContainer>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
