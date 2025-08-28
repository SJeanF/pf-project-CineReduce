import * as S from "./styles";
import MovieCard from "../../components/MovieCard";

const SectionContainer = () => {
  return (
    <S.SectionContainer>
      <S.SectionTittle>Em Alta</S.SectionTittle>
      <S.SectionList>
        {Array.from({ length: 4 }, (_, i) => i + 1).map((movie) => (
          <MovieCard />
        ))}
        <MovieCard />
      </S.SectionList>
    </S.SectionContainer>
  );
};

export default SectionContainer;
