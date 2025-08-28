import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const MovieCard = () => {
  return (
    <S.CardContainer>
      <S.CardMain>
        <S.CardImage src="https://image.tmdb.org/t/p/w500/j9hwS307Zlc5mQTbAnwV75vXG0H.jpg" />
      </S.CardMain>
      <S.CardFooter>
        <div>
          <S.CartMovieTittle>Os Vingadores </S.CartMovieTittle>
          <S.CardPriece>R$ 150</S.CardPriece>
        </div>
        <S.CardAddCartButton>
          <FontAwesomeIcon icon={faCartPlus} />
        </S.CardAddCartButton>
      </S.CardFooter>
    </S.CardContainer>
  );
};

export default MovieCard;
