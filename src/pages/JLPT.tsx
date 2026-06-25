import { Link, Outlet } from "react-router-dom";
import "./JLPT.css";

export default function JLPT() {
  return (
     <div className="jlpt-layout">
      <h4>文章選擇</h4>

      <nav className="jlpt-layout">
        <Link to="n4_1">N4_251113</Link> |{" "}
        <Link to="n4_2">N4_251225</Link> |{" "}
        <Link to="n3_1">N3_260115</Link> |{" "}
        <Link to="n3_2">N3_260301</Link> |{" "}
        <Link to="n3t01">N3_t01</Link> |{" "}
        <Link to="n3t02">N3_t02</Link> |{" "}
        <Link to="n3t03">N3_t03</Link> |{" "}
        <Link to="n3t04">N3_t04</Link> |{" "}
        <Link to="n3t05">N3_t05</Link> |{" "}
        <Link to="n3_prac">N3_prac</Link> |{" "}
        <Link to="n3_note">N3_note</Link> 

      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
