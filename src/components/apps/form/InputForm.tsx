import { Ref, forwardRef } from 'react';
import { styled } from 'twin.macro';

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // TODO : Props 추가하기
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ ...props }, ref: Ref<HTMLInputElement>) => {
    return (
      <InputFormContainer>
        <InputFormElement ref={ref} {...props} />
      </InputFormContainer>
    );
  },
);

const InputFormContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 48px;
  border: 1px solid #e5e5e5;
`;

const InputFormElement = styled.input`
  width: 100%;
  height: 100%;
`;

export default InputForm;
