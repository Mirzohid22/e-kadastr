import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LayoutBase from "./pages/layout";
import "./App.css";

function App() {
  const admin = useSelector((state) => state.admin.admin);
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!admin) {
      history("/login");
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="App">
      <LayoutBase />
    </div>
  );
}

export default App;
