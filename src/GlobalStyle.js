import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --primary: #bae8e8;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 18px;
  background-color: #fdfdfd;
}
`
