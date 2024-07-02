import { Ref, forwardRef } from 'react';
import type { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';
import { styled } from 'twin.macro';

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register?: (name: string, rules?: RegisterOptions) => UseFormRegisterReturn;
  errors?: any;
  rules?: RegisterOptions;
}

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ register, rules, name, errors, ...props }, ref: Ref<HTMLInputElement>) => {
    const hasError = !!errors?.[name];
    const errorMessage = errors?.[name]?.message;

    return (
      <InputFormContainer>
        <InputFormWrapper>
          <InputFormElement
            ref={ref}
            name={name}
            {...(register && register(name, rules))}
            {...props}
          />
        </InputFormWrapper>
        {hasError && <ErrorWrapper>{errorMessage}</ErrorWrapper>}
      </InputFormContainer>
    );
  },
);

const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputFormWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 48px;
  border: 1px solid #e5e5e5;
`;

const InputFormElement = styled.input`
  width: 100%;
  height: 100%;
`;

const ErrorWrapper = styled.div`
  font-size: 14px;
  color: coral;
`;

export default InputForm;
