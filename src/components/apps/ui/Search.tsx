import { styled } from 'twin.macro';

interface SeacrhProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Search({ className, ...props }: SeacrhProps) {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchForm {...props} className={className} type="search" />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
`;

const SearchForm = styled.input`
  position: relative;
  font-family: Pretendard !important;
  width: 288px;
  padding: 0 30px;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.025em;
  text-align: left;
  height: 33px;
  background-color: #f0f0f0;
  border-radius: 30px;
  font-family: Pretendard !important;
  font-weight: 400;
  font-size: 16px;
  color: #767676;
  z-index: 21;
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  width: 12px;
  height: 12px;
  transform: translateY(-50%);
  background-image: url(/images/icons/search-gray.svg);
  background-size: cover;
  z-index: 100;
  pointer-events: none;
  user-select: none;
`;
