import { useRouter } from 'next/router';
import { styled } from 'twin.macro';

import { useSearchSpacesQuery } from '@/apis/spaces/spaces.query';

export default function SearchPage() {
  const router = useRouter();
  const { q, page } = router.query;

  const { data, error, isLoading } = useSearchSpacesQuery({
    params: { query: String(q), page: Number(page) || 0, size: 10 },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handlePageChange = (newPage: number) => {
    window.location.href = `/search?q=${q}&page=${newPage}`;
  };

  return (
    <ResultsContainer>
      <h1>Search Results for {q}</h1>
      {data?.content.map((space) => (
        <SpaceItem key={space.id}>
          <h2>{space.name}</h2>
          <p>{space.description}</p>
          {/* 필요한 다른 필드들... */}
        </SpaceItem>
      ))}
      <Pagination>
        {[...Array(data?.page.totalPages)].map((_, index) => (
          <PageButton
            key={index}
            isActive={index + 1 === Number(page)}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
    </ResultsContainer>
  );
}

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpaceItem = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  width: 80%;
  text-align: left;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

const PageButton = styled.button<{ isActive: boolean }>`
  margin: 0 4px;
  padding: 8px 16px;
  border: none;
  background-color: ${(props) => (props.isActive ? '#000' : '#ccc')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  cursor: pointer;
`;
