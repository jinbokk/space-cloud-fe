import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { styled } from 'twin.macro';

import {
  useAuthEmailVerificationMutation,
  useAuthEmailVerificationVerifyMutation,
  useAuthSignupMutation,
} from '@/apis/auth';
import { AuthSignupParamsType } from '@/apis/auth/types';

import Recaptcha from '@/components/apps/auth/recaptcha/Recaptcha';
import InputForm from '@/components/apps/form/InputForm';
import CommonLogin from '@/components/apps/ui/CommonLogin';
import Button from '@/components/apps/ui/button/Button';

export default function Register() {
  const route = useRouter();
  const [runTimer, setRunTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);
  const [emailverification, setEmailVerification] = useState(false);

  // 타이머 이펙트
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (runTimer) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setRunTimer(false);
            return 180;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [runTimer]);

  const authSignUpMutation = useAuthSignupMutation();
  const authEmailVerificationMutation = useAuthEmailVerificationMutation();
  const authEmailVerificationVerifyMutation =
    useAuthEmailVerificationVerifyMutation();

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
          window.alert('회원가입에 성공했습니다');
          route.replace('/');
        },
        onError: () => {
          window.alert('회원가입에 실패했습니다');
        },
      },
    );
  };

  const onInvalidate = () => {
    window.alert('양식을 다시 확인해주세요');
  };

  const sendEmailVerificationCode = () => {
    setRunTimer(true);
    authEmailVerificationMutation.mutate(
      {
        email: watch('email'),
      },
      {
        onError: () => {
          setRunTimer(false);
          window.alert('이메일 인증 메일 발송에 실패했습니다.');
        },
      },
    );
  };

  const verifyEmail = () => {
    authEmailVerificationVerifyMutation.mutate(
      {
        email: watch('email'),
        code: watch('email_verification' as any),
      },
      {
        onSuccess: () => {
          window.alert('이메일 인증 성공');
          setEmailVerification(true);
          setRunTimer(false);
        },
        onError: () => {
          window.alert('이메일 인증 실패');
        },
      },
    );
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
                <EmailWrapper>
                  <InputForm
                    {...register('email', {
                      required: '이메일을 확인해 주세요',
                    })}
                    type="text"
                    placeholder="이메일"
                    errors={errors}
                    disabled={runTimer || emailverification}
                  />
                  {runTimer ? (
                    <Timer timeLeft={timeLeft} />
                  ) : emailverification ? (
                    <div tw="flex items-center shrink-0 pr-2">✅</div>
                  ) : (
                    <Button
                      type="button"
                      variant="primary"
                      tw="w-[150px]"
                      onClick={sendEmailVerificationCode}
                      disabled={emailverification || runTimer}
                    >
                      {emailverification ? '인증 완료' : '인증코드 발송'}
                    </Button>
                  )}
                </EmailWrapper>
                {!emailverification && runTimer && (
                  <EmailWrapper>
                    <InputForm
                      {...register('email_verification' as any, {
                        required: '인증코드를 다시 확인해 주세요',
                      })}
                      type="text"
                      placeholder="메일로 전송된 인증코드를 입력해 주세요"
                    />
                    <Button
                      type="button"
                      variant="primary"
                      tw="w-[150px]"
                      onClick={verifyEmail}
                      disabled={emailverification}
                    >
                      인증하기
                    </Button>
                  </EmailWrapper>
                )}
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
              <Button type="submit" tw="mt-[24px]">
                회원가입
              </Button>
            </form>
          }
        />
      </RegisterContainer>
    </FormProvider>
  );
}

// 타이머 컴포넌트
const Timer = ({ timeLeft }: { timeLeft: number }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <TimerContainer>
      <div>
        남은 시간 {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </TimerContainer>
  );
};

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

const EmailWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 150px;
  font-size: 13px;
  white-space: nowrap;
  color: coral;
`;
