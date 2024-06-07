import { styled } from 'twin.macro';

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // TODO : Props 추가하기
}

export default function InputForm({ ...props }: InputFormProps) {
  return <InputFormContainer {...props} />;
}

const InputFormContainer = styled.input`
  width: 100%;
  padding: 0 16px;
  height: 48px;
  border: 1px solid #e5e5e5;
`;
