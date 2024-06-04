import { styled } from 'twin.macro';

export default function NoImage() {
  return (
    <NoImageContainer>
      <NoImageContent />
    </NoImageContainer>
  );
}

const NoImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const NoImageContent = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  background-image: url('/images/no-image.jpg');
`;
