import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToFeed, goToLoginPage } from "../Router/Coordinator";

//useLayoutEffect igual o useEffect porem nao pisca a pagina que nao deve
const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToFeed(history);
    }
  }, [history]);
};

export default useProtectedPage;
