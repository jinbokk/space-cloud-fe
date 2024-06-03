import { styled, theme } from 'twin.macro';

type Props = {
  children: React.ReactNode;
};
export default function ContentWrapper({ children }: Props) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  padding: 0 ${theme`variables.gutter`};
  margin: 0 auto;
  max-width: calc(
    ${theme`variables.apps.max-width`} + (${theme`variables.gutter`} * 2)
  );
`;
