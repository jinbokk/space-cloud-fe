import { styled } from 'twin.macro';

import { useUserInfoQuery } from '@/apis/user';

export default function Mypage() {
  const { data, isLoading } = useUserInfoQuery();
  console.log({ data });

  if (isLoading) {
    return;
  }

  return (
    <MypageContainer>
      <Top>
        <Row>
          <Title>닉네임</Title>
          <Content></Content>
        </Row>
      </Top>
      <Bottom></Bottom>
    </MypageContainer>
  );
}

const MypageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background: white;
`;

const Top = styled.div`
  border-bottom: 1px solid #f6f6f6;
`;

const Bottom = styled.div``;

const Row = styled.div``;

const Title = styled.div`
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
