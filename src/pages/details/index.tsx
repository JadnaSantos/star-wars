import { PATH } from "../../routes/path";
import { Empty } from "../../components/empty";
import { useNavigate } from "react-router-dom";

export const DetailPage = () => {
  const navigate = useNavigate();

  return <Empty type="back" onClick={() => navigate(PATH.CHARACTERS)} />;
};
