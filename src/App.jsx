import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Coins from "./pages/Coins";
import { useDispatch } from "react-redux";
import { getCoins } from "./redux/actions/coinActions";
import Navbar from "./components/Navbar";
import Coin from "./routes/Coin";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
