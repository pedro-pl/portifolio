import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body.lock-scroll {
    overflow: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Inter", sans-serif;
  }

  * {
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #D8F3DC;
    }

    ::-webkit-scrollbar-thumb {
      background: #212529;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`