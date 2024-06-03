import { Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles, css } from 'twin.macro';

const customStyles = css`
  body {
    ${tw`antialiased`}
    font-family:
    Nanum Gothic,
    Pretendard,
      '돋움',
      Helvetica,
      'Apple SD Gothic Neo',
      Sans-serif;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
