import JLPT from "../pages/JLPT";
import N4_251113 from "../pages/pages_jp/2025_11_13";
import N4_251225 from "../pages/pages_jp/2025_12_25";

const jlptRoutes = {
  path: "JLPT",
  element: <JLPT />,
  children: [
    { index: true, element: <N4_251113 /> }, // /JLPT
    { path: "n4_1", element: <N4_251113 /> },
    { path: "n4_2", element: <N4_251225 /> },
  ],
};

export default jlptRoutes;
