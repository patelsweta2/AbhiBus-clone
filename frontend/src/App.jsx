import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./store/user/userSlice";

const App = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      const obj = setUser({ name: "kapil", age: 26, others: "dsafdaf" });
      dispatch(obj);
    }, 4000);
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
