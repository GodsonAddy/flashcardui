import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import { Button, FlashCard, Questionnaire } from 'flashcardui';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Poppins",sans-serif
  }
`;
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Button
        color="#ff7043"
        label="flashUI"
        hover="#bf360c"
        buttonType="contained"
      />

      <FlashCard title="God is good" content="God is good" divider />

      <Questionnaire content="Accra is the best place to be in" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
