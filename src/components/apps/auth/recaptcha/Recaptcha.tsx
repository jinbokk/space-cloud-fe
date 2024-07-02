import ReCAPTCHA from 'react-google-recaptcha';
import { useFormContext } from 'react-hook-form';
import { styled } from 'twin.macro';

type Props = {
  className?: string;
};

export default function Recaptcha({ className }: Props) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const onChange = (value: any) => {
    setValue('captchaToken', value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <>
      <input
        type="hidden"
        {...register('captchaToken', {
          required: '리캡챠를 확인해 주세요',
        })}
      />
      <RecaptchaContainer className={className}>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          onChange={onChange}
        />
      </RecaptchaContainer>
      {errors.captchaToken && (
        <ErrorWrapper>{String(errors.captchaToken.message)}</ErrorWrapper>
      )}
    </>
  );
}

const RecaptchaContainer = styled.div``;

const ErrorWrapper = styled.div`
  font-size: 14px;
  color: coral;
`;
