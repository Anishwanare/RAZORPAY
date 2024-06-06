import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";

const App = () => {
  return (  
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
