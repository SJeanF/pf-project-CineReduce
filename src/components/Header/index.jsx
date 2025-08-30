import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "../../containers/Cart";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { randomNumber } from "../../lib/numbers";

export const randomRoute = randomNumber();

const Header = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.NetoFilho4Adim = () => {
      navigate(`/${randomRoute}`);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <S.Header>
      <S.PageTittle onClick={() => navigate("./")}>NetoFilho</S.PageTittle>
      <S.SearchArea onSubmit={handleSubmit}>
        <S.SearchBar
          type="text"
          placeholder="Titulo do filme buscado"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <S.SearchButton type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </S.SearchButton>
      </S.SearchArea>
      <div>
        <S.CartButton type="button" onClick={() => setCartVisibility(true)}>
          <FontAwesomeIcon icon={faCartShopping} />
        </S.CartButton>
        <Cart isVisible={cartVisibility} setIsVisible={setCartVisibility} />
      </div>
    </S.Header>
  );
};

export default Header;
