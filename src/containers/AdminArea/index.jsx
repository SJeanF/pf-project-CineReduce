import { useEffect, useRef, useState } from "react";
import AdminMovieListItem from "../../components/AdminMovieListItem";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToCollection, updateMovie } from "../../redux/database/slice";
import { useNavigate } from "react-router-dom";

const AdminArea = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const sectionRef = useRef();

  const [addFormMode, setAddFormMode] = useState(true);
  const [inputsValue, setInputsValue] = useState({});

  useEffect(() => {
    if (addFormMode) {
      setInputsValue({});
    }
  }, [addFormMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addFormMode) {
      dispatch(addMovieToCollection(inputsValue));
      setInputsValue({});
    } else {
      dispatch(updateMovie(inputsValue));
      setInputsValue({});
      setAddFormMode(true);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <S.Header ref={sectionRef}>
        <h1>NetoFilho4Adimin</h1>
      </S.Header>

      <S.Main>
        <S.Section>
          <S.SectionTitle>
            {addFormMode
              ? "Adicionar Novo Filme"
              : `Atualizar ${inputsValue.title}`}
          </S.SectionTitle>
          <S.MovieForm onSubmit={handleSubmit}>
            <S.Input
              value={inputsValue.poster || ""}
              onChange={(e) =>
                setInputsValue({ ...inputsValue, poster: e.target.value })
              }
              type="text"
              placeholder="Poster"
              required
            />
            <S.Input
              value={inputsValue.title || ""}
              onChange={(e) =>
                setInputsValue({ ...inputsValue, title: e.target.value })
              }
              type="text"
              placeholder="Título"
              required
            />
            <S.Input
              value={inputsValue.release_date || ""}
              onChange={(e) =>
                setInputsValue({ ...inputsValue, release_date: e.target.value })
              }
              type="text"
              placeholder="Lançamento (ano-mes-dia)"
              required
            />
            <S.Input
              value={inputsValue.vote_average || ""}
              onChange={(e) =>
                setInputsValue({ ...inputsValue, vote_average: e.target.value })
              }
              type="number"
              placeholder="Nota"
              required
            />
            <S.Input
              value={inputsValue.budget || ""}
              onChange={(e) =>
                setInputsValue({ ...inputsValue, budget: e.target.value })
              }
              type="number"
              placeholder="Orçamento"
            />
            <S.Input
              value={inputsValue.revenue || ""}
              onChange={(e) =>
                setInputsValue({ ...inputsValue, revenue: e.target.value })
              }
              type="number"
              placeholder="Arrecadação"
            />
            <S.Input
              value={inputsValue.price || ""}
              onChange={(e) =>
                setInputsValue({ ...inputsValue, price: e.target.value })
              }
              type="number"
              placeholder="Preço"
            />
            <S.AddButton $formMode={addFormMode} type="submit">
              {addFormMode ? "Adicionar Filme" : "Atualizar Filme"}
            </S.AddButton>
            {!addFormMode && (
              <S.CancelButton onClick={() => setAddFormMode(true)}>
                Cancelar
              </S.CancelButton>
            )}
          </S.MovieForm>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Gerenciar Filmes</S.SectionTitle>
          <S.MovieList>
            {movies.map((movie) => (
              <AdminMovieListItem
                scrollTop={scrollToSection}
                key={movie.id}
                movie={movie}
                setUpdateMode={setAddFormMode}
                setEditingMovie={setInputsValue}
              />
            ))}
          </S.MovieList>
        </S.Section>

        <S.BackLink onClick={handleBack}>Voltar para a Loja</S.BackLink>
      </S.Main>

      <S.Footer>
        <p>NetoFilho - Área do Administrador</p>
      </S.Footer>
    </>
  );
};

export default AdminArea;
