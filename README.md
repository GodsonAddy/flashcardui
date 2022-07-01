# flashcardui

> UI library for flash card application

## Install

```bash
npm i flashcardui
```

## Description

UI library for flash card application

## Usage

```tsx
import React, { Component } from 'react';

import { Button } from 'flashcardui';

class Example extends Component {
  render() {
    return (
      <Button
        color="#ff7043"
        label="flashUI"
        hover="#bf360c"
        buttonType="contained"
      />
    );
  }
}
```

## Github

https://github.com/GodsonAddy/flashcardui

## Error

If you get this error below when you run npm start after installing this package, just install npm i styled-components in your terminal and then npm start

Module not found: Error: Can't resolve 'styled-components' in 'C:\Users\your-name\OneDrive\Documents\GitHub\flashcard-frontend\node_modules\flashcardui\dist'
ERROR in ./node_modules/flashcardui/dist/flashcardui.esm.js 2:0-54
Module not found: Error: Can't resolve 'styled-components' in 'C:\Users\your-name\OneDrive\Documents\GitHub\flashcard-frontend\node_modules\flashcardui\dist'

## License

MIT © [GodsonAddy](https://github.com/GodsonAdy)
