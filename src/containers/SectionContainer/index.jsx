import * as S from "./styles";
import MovieCard from "../../components/MovieCard";

const SectionContainer = ({ tittle, movies }) => {
  return (
    <S.SectionContainer>
      <S.SectionTittle>{tittle}</S.SectionTittle>
      <S.SectionList>
        {movies.map((movie) => (
          <MovieCard key={movie.id} currentMovie={movie} />
        ))}
      </S.SectionList>
    </S.SectionContainer>
  );
};

export default SectionContainer;
