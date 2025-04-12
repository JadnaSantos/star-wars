import { PATH } from "../../routes/path";
import { Empty } from "../../components/empty";
import { useNavigate } from "react-router-dom";

export const Favorites = () => {
  const navigate = useNavigate();

  return <Empty type="back" onClick={() => navigate(PATH.CHARACTERS)} />;
};
