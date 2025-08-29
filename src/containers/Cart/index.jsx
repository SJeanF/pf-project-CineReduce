import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import * as S from "./styles";
import { selectTotalCart } from "../../redux/cart/selectors";
import { dotToComma } from "../../utils/stringFormat";

const Cart = ({ isVisible, setIsVisible }) => {
  const cart = useSelector((state) => state.cart);
  const totalCart = useSelector(selectTotalCart);

  return (
    <S.CartCoverScreen $isVisible={isVisible}>
      <S.ExitArea onClick={() => setIsVisible(false)} />
      <S.CardContainer>
        <S.CardHeader>
          <S.CardTittle>Seu Carrinho</S.CardTittle>
        </S.CardHeader>
        <S.MoviesList>
          {cart.map((movie) => (
            <CartItem key={movie.id} currentMovie={movie} />
          ))}
        </S.MoviesList>
        <S.CardFooter>
          <p>Total: R$ {dotToComma(totalCart.toFixed(2))}</p>
        </S.CardFooter>
      </S.CardContainer>
    </S.CartCoverScreen>
  );
};

// Array.from({ length: 7 }, (_, i) => i + 1)
export default Cart;
