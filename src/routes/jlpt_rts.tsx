import JLPT from "../pages/JLPT";
import N4_251113 from "../pages/pages_jp/2025_11_13";
import N4_251225 from "../pages/pages_jp/2025_12_25";
import N3_260115 from "../pages/pages_jp/2026_01_15";
import N3_260301 from "../pages/pages_jp/2026_03_01";
import N3_t01 from "../pages/pages_jp/1st_jlpt_test";
import N3_prac from "../pages/pages_jp/practice";


const jlptRoutes = {
  path: "JLPT",
  element: <JLPT />,
  children: [
    { index: true, element: <N4_251113 /> }, // /JLPT
    { path: "n4_1", element: <N4_251113 /> },
    { path: "n4_2", element: <N4_251225 /> },
    { path: "n3_1", element: <N3_260115 /> },
    { path: "n3_2", element: <N3_260301 /> },
    { path: "n3t01", element: <N3_t01 /> } ,
    { path: "n3_prac", element: <N3_prac /> } 

  ],
};

export default jlptRoutes;
