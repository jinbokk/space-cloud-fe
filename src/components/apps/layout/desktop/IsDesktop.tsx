import MediaQuery from 'react-responsive';
import { theme } from 'twin.macro';

type Props = {
  children: React.ReactNode;
};

export default function IsDesktop({ children }: Props) {
  return <MediaQuery minWidth={theme`screens.lg`}>{children}</MediaQuery>;
}
