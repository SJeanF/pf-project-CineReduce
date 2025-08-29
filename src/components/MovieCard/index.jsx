import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import { dotToComma, maxString } from "../../utils/stringFormat";
import { addCart } from "../../redux/cart/slice";

const MovieCard = ({ currentMovie }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCart(currentMovie));
  };

  return (
    <S.CardContainer>
      <S.CardMain>
        <S.CardImage src={currentMovie.poster} />
      </S.CardMain>
      <S.CardFooter>
        <div>
          <S.CartMovieTittle>{maxString(currentMovie.title)}</S.CartMovieTittle>
          <S.CardPriece>R$ {dotToComma(currentMovie.price)}</S.CardPriece>
        </div>
        <S.CardAddCartButton onClick={addToCart}>
          <FontAwesomeIcon icon={faCartPlus} />
        </S.CardAddCartButton>
      </S.CardFooter>
    </S.CardContainer>
  );
};

export default MovieCard;
