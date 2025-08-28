import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

const CartItem = () => {
  return (
    <S.ItemContainer>
      <S.ItemImage src="https://image.tmdb.org/t/p/w500/j9hwS307Zlc5mQTbAnwV75vXG0H.jpg" />
      <S.ItemInfos>
        <S.MovieTittle>Os Vingadores</S.MovieTittle>
        <S.MovieProducer>Marvel Studios</S.MovieProducer>
      </S.ItemInfos>
      <S.RemoveButton>
        <FontAwesomeIcon icon={faTrashCan} />
      </S.RemoveButton>
    </S.ItemContainer>
  );
};

export default CartItem;
