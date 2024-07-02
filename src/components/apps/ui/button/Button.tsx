import React from 'react';
import { css, styled } from 'twin.macro';

type VariantType = 'primary';

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
    display: block;
    width: 100%;
    height: 48px;
    margin-top: 24px;
    background: #ffd014;
    font-size: 14px;
    line-height: 48px;
  `,
};

const ButtonContainer = styled.button<{ variant: VariantType }>`
  ${({ variant }) => ButtonStyles[variant]}
`;
