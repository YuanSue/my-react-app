import { BrowserRouter, Link, useRoutes } from "react-router-dom";
import jlptRoutes from "./routes/jlpt_rts";
import "./App.css";

function AppRoutes() {
  return useRoutes([jlptRoutes]);
}

function App() {
  return (
    <BrowserRouter basename="/my-react-app">
      <div className="container">
        <header className="header">
          <h1 className="title">元蘇學習網</h1>

          <nav className="nav">
            <Link to="/JLPT" className="nav-link">JLPT</Link>
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
