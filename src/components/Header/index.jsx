import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "../../containers/Cart";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <h2>NetoFilho</h2>
      <S.SearchArea>
        <S.SearchBar placeholder="Titulo do filme buscado" />
        <S.SearchButton type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchButton>
      </S.SearchArea>
      <div>
        <S.CartButton type="button">
          <FontAwesomeIcon icon={faCartShopping} />
        </S.CartButton>
        <Cart />
      </div>
    </S.Header>
  );
};

export default Header;
