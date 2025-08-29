import * as S from "./styles";
import SectionContainer from "../SectionContainer";
import { useSelector } from "react-redux";
import * as F from "../../utils/filters";

const MainHighlights = () => {
  const moviesCollection = useSelector((state) => state.movies);
  return (
    <S.MainContainer>
      <SectionContainer
        tittle="Maior Orçamento"
        movies={F.budgetFilter(moviesCollection)}
      />
      <SectionContainer
        tittle="Maior Arrecadação"
        movies={F.revenueFilter(moviesCollection)}
      />
      <SectionContainer
        tittle="Maiores Notas"
        movies={F.noteFilter(moviesCollection)}
      />
      <SectionContainer
        tittle="Mais Recentes"
        movies={F.latestFilter(moviesCollection)}
      />
      <SectionContainer
        tittle="Seção Economica"
        movies={F.lowerPriceFilter(moviesCollection)}
      />
    </S.MainContainer>
  );
};

export default MainHighlights;
