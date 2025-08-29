import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/cart/slice";
import { dotToComma } from "../../utils/stringFormat";

const CartItem = ({ currentMovie }) => {
  const dispatch = useDispatch();

  const removeOfCart = () => {
    dispatch(removeCart(currentMovie.id));
  };

  return (
    <S.ItemContainer>
      <S.ItemImage src={currentMovie.poster} />
      <S.ItemInfos>
        <S.MovieTittle>{currentMovie.title}</S.MovieTittle>
        <S.MovieProducer>{dotToComma(currentMovie.price)}</S.MovieProducer>
      </S.ItemInfos>
      <S.RemoveButton onClick={removeOfCart}>
        <FontAwesomeIcon icon={faTrashCan} />
      </S.RemoveButton>
    </S.ItemContainer>
  );
};

export default CartItem;
