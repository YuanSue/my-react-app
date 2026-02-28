import { BrowserRouter, Link, useRoutes } from "react-router-dom";
import jlptRoutes from "./routes/jlpt_rts";
import EngRoutes from "./routes/Eng_rts";
import "./App.css";

function AppRoutes() {
  // 將所有路由規則合併到同一個陣列傳入
  return useRoutes([
    jlptRoutes, 
    EngRoutes
  ]);
}

function App() {
  return (
    <BrowserRouter basename="/my-react-app">
      <div className="container">
        <header className="header">
          <h1 className="title">元蘇學習網</h1>

          <nav className="nav">
            <Link to="/JLPT" className="nav-link">JLPT</Link>
            <Link to="/Eng" className="nav-link">Eng</Link>
          </nav>
        </header>

        <main className="content">
          {/* ⭐ 路由內容顯示在這裡 */}
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
