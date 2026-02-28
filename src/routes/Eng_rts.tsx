import Eng from "../pages/Eng";
// 1. 這裡 import 時改用大寫名稱 (雖然檔案路徑可以是小寫)
import TradeOff from "../pages/pages_en/trade_off"; 
import Comparison from "../pages/pages_en/feeling_unwell"; 
import Recommendations from "../pages/pages_en/in_clinics"; 

const EngRoutes = {
  path: "Eng",
  element: <Eng />,
  children: [
    // 2. 這裡使用大寫標籤 <TradeOff />
    { index: true, element: <TradeOff /> }, 
    { path: "MU1", element: <TradeOff /> },
    { path: "MU2", element: <Comparison /> },
    { path: "MU3", element: <Recommendations /> }
  ],
};

export default EngRoutes;