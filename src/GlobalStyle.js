import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --primary: #39899A;
  --secondary: #2A8CB7;
  --tertiary: #B288C0;
  --quarternary: #E4B7E5;
  --quinary: #2E2D4D;
  --senary: #fdfdfd;
  --text-primary: #72809d;
  --text-secondary: #d7e1ea;
  --text-tertiary: #f0f4f8;
  --text-quarternary: #fdfdfd;
}

* {
  box-sizing: border-box;
}
  

body {
  background-color: var(--senary);
  font-size: 18px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1.22;
  letter-spacing: 0.39px;
  height: 100vh;
  margin: 0;
}


h1, h2, h3 {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: var(--text-primary);
}

a {
  color: var(--tertiary);
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
}

`
