import Link, { LinkProps } from 'next/link';
import { styled } from 'twin.macro';

interface SocialLoginProps extends LinkProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

export default function SocialLogin({
  children,
  icon,
  ...props
}: SocialLoginProps) {
  return (
    <SocialLoginContainer {...props}>
      {icon}
      {children}
    </SocialLoginContainer>
  );
}

const SocialLoginContainer = styled(Link)`
  position: relative;
  height: 56px;
  font-size: 16px;
  line-height: 56px;
  display: block;
  position: relative;
  border: 1px solid #b1b1b1;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;
