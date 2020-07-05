import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --primary: #bae8e8;
  --secondary: #82a2a2;
  --tertiary: #e8badd;
  --quarternary: #a2829a;
  --quinary: #e8dfba;
  --senary: #fdfdfd;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
  

body {
  font-size: 18px;
  background-color: var(--senary);
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  color: #72809d;
}

h1, h2, h3 {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  color: #72809d;
}

`
