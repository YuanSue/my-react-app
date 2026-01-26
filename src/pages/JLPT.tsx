import { Link, Outlet } from "react-router-dom";
import "./JLPT.css";

export default function JLPT() {
  return (
     <div className="jlpt-layout">
      <h4>文章選擇</h4>

      <nav className="jlpt-layout">
        <Link to="n4_1">N4_251113</Link> |{" "}
        <Link to="n4_2">N4_251225</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
