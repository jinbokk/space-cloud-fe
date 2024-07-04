import React from 'react';
import { css, styled } from 'twin.macro';

type VariantType = 'primary' | 'secondary';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  children,
  ...props
}: Props) {
  return (
    <ButtonContainer variant={variant} {...props}>
      {children}
    </ButtonContainer>
  );
}

const ButtonStyles = {
  primary: css`
    background: #ffd014;
  `,
  secondary: css`
    background: white;
    border: 1px solid #ffd014;
    border-radius: 5px;
    &:hover {
      background: #ffd014;
      color: white;
      transition: 0.2s;
    }
  `,
};

const ButtonContainer = styled.button<{ variant: VariantType }>`
  width: 100%;
  height: 48px;
  font-size: 14px;
  line-height: 48px;
  ${({ variant }) => ButtonStyles[variant]}
`;
