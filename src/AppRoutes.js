import {Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Other from "./views/Other";
import LogiIn from "./views/LogiIn";
import { useSelector } from 'react-redux';

const AppRoutes = () => {
  const isLogged = useSelector(state => state.user.state);

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogiIn />} />
        {isLogged && (<Route path="/other" element={<Other />} />)}
        <Route path="*" element={isLogged ? <NotFound /> : <div>Please log in!</div>} />
    </Routes>
  );
};

export default AppRoutes;