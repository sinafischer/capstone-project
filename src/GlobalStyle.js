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
}
  

body {
  background-color: var(--senary);
  font-size: 18px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  color: #72809d;
  line-height: 1.22;
  letter-spacing: 0.39px;
  grid-template-rows: 85px auto;
  height: 100vh;
  margin: 0;
}


h1, h2, h3 {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: #72809d;
}

a {
  color: var(--tertiary);
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
}

`
