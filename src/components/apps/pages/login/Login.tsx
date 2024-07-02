import Link from 'next/link';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { styled } from 'twin.macro';

import { useAuthLoginMutation } from '@/apis/auth';
import { AuthLoginParamsType } from '@/apis/auth/types';

import CheckboxForm from '../../form/CheckboxForm';
import InputForm from '../../form/InputForm';
import CommonLogin from '../../ui/CommonLogin';
import Button from '../../ui/button/Button';

export default function Login() {
  const authLoginMutation = useAuthLoginMutation();

  const methods = useForm<AuthLoginParamsType>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<AuthLoginParamsType> = (data) => {
    const { email, password } = data;
    authLoginMutation.mutate(
      { email, password },
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

  return (
    <FormProvider {...methods}>
      <LoginContainer>
        <CommonLogin
          title="게스트 로그인"
          contents={
            <form onSubmit={() => handleSubmit(onSubmit)}>
              <InputFormWrapper>
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
              </InputFormWrapper>

              <ContentsWrapper>
                <CheckboxFormWrapper>
                  <CheckboxForm id="remember" name="remember">
                    {/* TODO : 로그인 기억하기 기능 추가 */}
                    <Text>로그인 기억하기</Text>
                  </CheckboxForm>
                </CheckboxFormWrapper>
                <Link href="/account/find-password">
                  <Text>비밀번호 찾기</Text>
                </Link>
              </ContentsWrapper>
              <Button type="submit">이메일로 로그인</Button>

              <LoginFormFooter>
                <Text>
                  <span>아직 스페이스클라우드 회원이 아니신가요?</span>
                  <Link href="/account/register">회원가입</Link>
                </Text>
              </LoginFormFooter>
            </form>
          }
        />
      </LoginContainer>
    </FormProvider>
  );
}

const LoginContainer = styled.div`
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
  margin-bottom: 15px;
`;

const CheckboxFormWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Text = styled.p`
  font-size: 14px;
  & span {
    margin-right: 10px;
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const LoginFormFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  & p {
    opacity: 0.8;
  }
  & a {
    color: black;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
