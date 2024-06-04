import { Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles, css, theme } from 'twin.macro';

const customStyles = css`
  body {
    position: relative;
    width: 100%;
    min-width: ${theme`variables.apps.min-width`};
    background-color: white;
    -webkit-tap-highlight-color: transparent;
    overflow: auto;
    font-family: 'Nanum Gothic', 'Pretendard', Helvetica, 'Apple SD Gothic Neo',
      Sans-serif !important;
    ${tw`antialiased`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
