import CartItem from "../../components/CartItem";
import * as S from "./styles";

const Cart = () => {
  return (
    <S.CartCoverScreen>
      <S.ExitArea />
      <S.CardContainer>
        <S.CardHeader>
          <S.CardTittle>Seu Carrinho</S.CardTittle>
        </S.CardHeader>
        <S.MoviesList>
          {Array.from({ length: 7 }, (_, i) => i + 1).map((movie) => (
            <CartItem />
          ))}
        </S.MoviesList>
        <S.CardFooter>
          <p>Total: R$ 350</p>
        </S.CardFooter>
      </S.CardContainer>
    </S.CartCoverScreen>
  );
};

export default Cart;
