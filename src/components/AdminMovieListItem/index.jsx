import { useDispatch } from "react-redux";
import * as S from "./styles";
import { removeMovieOfCollection } from "../../redux/database/slice";

const AdminMovieListItem = ({
  movie,
  setUpdateMode,
  setEditingMovie,
  scrollTop,
}) => {
  const dispatch = useDispatch();

  const handleRemoveFilm = () => {
    if (
      prompt(
        `tem certeza que quer remover ${movie.title} da coleção, essa operação não pode ser desfeita
digite 1 para confirmar`
      ) == 1
    ) {
      dispatch(removeMovieOfCollection(movie.id));
    }
  };

  return (
    <S.MovieListItem>
      <span>
        id: "{movie.id}" titulo: "{movie.title}"
      </span>
      <S.MovieActions>
        <S.AlterButton
          onClick={() => {
            setUpdateMode(false);
            setEditingMovie(movie);
            scrollTop();
          }}
        >
          Alterar
        </S.AlterButton>
        <S.RemoveButton onClick={handleRemoveFilm}>Remover</S.RemoveButton>
      </S.MovieActions>
    </S.MovieListItem>
  );
};

export default AdminMovieListItem;
