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
import headerLogo from "../../assets/headerLogo.png";

export const randomRoute = randomNumber();

const Header = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.CineReduce4Adm = () => {
      navigate(`/${randomRoute}`);
    };
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    } else {
      navigate("/");
    }
  };

  return (
    <S.Header>
      <S.PageTittle src={headerLogo} onClick={() => navigate("./")} />
      <S.SearchArea onSubmit={(e) => e.preventDefault()}>
        <S.SearchBar
          type="text"
          placeholder="Titulo do filme buscado"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyUp={handleChange}
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
