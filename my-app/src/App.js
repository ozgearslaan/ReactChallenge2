import Navbar from "./pages/HomeUnits/HomeUnits.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Pages/Home/Home.jsx";
import Units from "./pages/Pages/Units/Units.jsx";
import UnitDetails from "./pages/Pages/UnitsDetail/UnitDetails.jsx";
import { useState } from "react";

function App() {
  const [refId, setRefId] = useState(2);

  const [productId, setProductId] = useState(refId);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/units"
          element={<Units productId={productId} setProductId={setProductId} />}
        ></Route>
        <Route
          path="/units/:id"
          element={
            <UnitDetails
              productId={productId}
              setProductId={setProductId}
              setRefId={setRefId}
              refId={refId}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
