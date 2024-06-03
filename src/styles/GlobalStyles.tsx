import { Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles, css } from 'twin.macro';

const customStyles = css`
  body {
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
