import { styled } from 'twin.macro';

interface CheckboxFormProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children: React.ReactNode;
}

export default function CheckboxForm({
  children,
  ...props
}: CheckboxFormProps) {
  return (
    <CheckboxFormContainer>
      <Checkbox type="checkbox" {...props} />
      <label>{children}</label>
    </CheckboxFormContainer>
  );
}

const CheckboxFormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
`;
