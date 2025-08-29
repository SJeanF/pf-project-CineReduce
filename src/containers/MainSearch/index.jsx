import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import * as S from "./styles";
import { useSelector } from "react-redux";

const MainSearch = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const movies = useSelector((state) => state.movies);

  const resultados = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <S.SearchResultContainer>
      <S.SearchSectionContainer>
        <S.SearchSectionHeader>
          <S.SearchSectionTitle>
            Resultados para pesquisa de... "Prono geu bem vindo ao site
            pornoguei"
          </S.SearchSectionTitle>
        </S.SearchSectionHeader>
        <S.SearchSectionMoviesList>
          {resultados.map((movie) => (
            <MovieCard key={movie.id} currentMovie={movie} />
          ))}
        </S.SearchSectionMoviesList>
      </S.SearchSectionContainer>
    </S.SearchResultContainer>
  );
};

export default MainSearch;
