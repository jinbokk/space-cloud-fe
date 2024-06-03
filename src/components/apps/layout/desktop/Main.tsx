import { css, styled } from 'twin.macro';

export type paddingProps = {
  top: '0' | '60px' | '95px' | '100px';
  bottom: '0' | '60px' | '80px' | '100px' | '120px' | '240px';
};

type Props = {
  padding?: paddingProps;
  children: React.ReactNode;
};

export default function Main({
  padding = { top: '0', bottom: '0' },
  children,
}: Props) {
  return <MainContainer padding={padding}>{children}</MainContainer>;
}

const MainContainer = styled.main<{
  padding: paddingProps;
}>`
  flex: 1;
  ${({ padding }) =>
    padding.top &&
    css`
      padding-top: ${padding.top};
    `}

  ${({ padding }) =>
    padding.bottom &&
    css`
      padding-bottom: ${padding.bottom};
    `}
`;
