import MediaQuery from 'react-responsive';
import { theme } from 'twin.macro';

type Props = {
  children: React.ReactNode;
};

export default function IsMobile({ children }: Props) {
  return <MediaQuery maxWidth={theme`screens.lg`}>{children}</MediaQuery>;
}
