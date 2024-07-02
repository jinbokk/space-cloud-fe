import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { styled } from 'twin.macro';

import { useAuthSignupMutation } from '@/apis/auth';
import { AuthSignupParamsType } from '@/apis/auth/types';

import Recaptcha from '@/components/apps/auth/recaptcha/Recaptcha';
import InputForm from '@/components/apps/form/InputForm';
import CommonLogin from '@/components/apps/ui/CommonLogin';
import Button from '@/components/apps/ui/button/Button';

export default function Register() {
  const authSignUpMutation = useAuthSignupMutation();

  const methods = useForm<AuthSignupParamsType>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<AuthSignupParamsType> = (data) => {
    const { name, email, password, passwordCheck, captchaToken } = data;
    authSignUpMutation.mutate(
      {
        name,
        email,
        password,
        passwordCheck,
        captchaToken,
      },
      {
        onSuccess: () => {
          console.log('로그인 성공');
        },
        onError: (error) => {
          console.log('로그인 실패', error);
        },
      },
    );
  };

  const onInvalidate = () => {
    window.alert('양식을 다시 확인해주세요');
  };

  return (
    <FormProvider {...methods}>
      <RegisterContainer>
        <CommonLogin
          title="회원가입"
          contents={
            <form onSubmit={handleSubmit(onSubmit, onInvalidate)}>
              <InputFormWrapper>
                <InputForm
                  {...register('name', {
                    required: '닉네임을 확인해 주세요',
                  })}
                  type="text"
                  placeholder="닉네임"
                  errors={errors}
                />
                <InputForm
                  {...register('email', {
                    required: '이메일을 확인해 주세요',
                  })}
                  type="text"
                  placeholder="이메일"
                  errors={errors}
                />
                <InputForm
                  {...register('password', {
                    required: '비밀번호를 확인해 주세요',
                  })}
                  type="password"
                  placeholder="비밀번호"
                  errors={errors}
                />
                <InputForm
                  {...register('passwordCheck', {
                    required: '비밀번호를 확인해 주세요',
                    validate: (value) =>
                      value === watch('password') ||
                      '비밀번호가 일치하지 않습니다',
                  })}
                  type="password"
                  placeholder="비밀번호 확인"
                  errors={errors}
                />
                <Recaptcha tw="mt-[9px]" />
              </InputFormWrapper>
              <Button type="submit">회원가입</Button>
            </form>
          }
        />
      </RegisterContainer>
    </FormProvider>
  );
}

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  height: 100%;
  font-family: 'Pretendard';
`;

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
