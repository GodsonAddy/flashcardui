import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Button } from '../.';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Poppins",sans-serif
  }
`;
const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Button
        color="#ff7043"
        label="flashUI"
        hover="#bf360c"
        buttonType="contained"
      />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
