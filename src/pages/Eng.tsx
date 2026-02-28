import { Link, Outlet } from "react-router-dom";
import "./Eng.css";

export default function Eng() {
  return (
     <div className="Eng-layout">
      <h4>文章選擇</h4>

      <nav className="eng-layout">
        <Link to="MU1_1">Make a trade-off</Link> |{" "}
        <Link to="MU1_2">Comparison</Link> |{" "}
        <Link to="MU1_3">Recommendations</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
