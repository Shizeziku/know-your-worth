// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Welcome.css";

// const Welcome = () => {
//   const [name, setName] = useState("");
//   const [income, setIncome] = useState("");
//   const navigate = useNavigate();

//   const handleProceed = () => {
//     if (name.trim() && income.trim()) {
//       navigate(`/main?name=${encodeURIComponent(name)}&income=${income}`);
//     } else {
//       alert("Please enter your Name and Monthly Income!");
//     }
//   };

//   return (
//     <div className="welcome-container">
//       <div className="welcome-card">
//         <h1 className="animated-title">Welcome to Know Your Worth</h1>
//       </div>

//       <div className="input-card">
//         <label>Name:</label>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>

//       <div className="input-card">
//         <label>Monthly Income (INR):</label>
//         <input
//           type="number"
//           placeholder="Enter your income"
//           value={income}
//           onChange={(e) => setIncome(e.target.value)}
//         />
//       </div>

//       <div className="proceed-card">
//         <button onClick={handleProceed}>Proceed ➜</button>
//       </div>
//     </div>
//   );
// };

// export default Welcome;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");
  const navigate = useNavigate();

  const handleProceed = () => {
    if (name.trim() && income.trim()) {
      navigate(`/main?name=${encodeURIComponent(name)}&income=${income}`);
    } else {
      alert("Please enter your Name and Monthly Income!");
    }
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="animated-title">Welcome to Know Your Worth</h1>
      </div>

      <div className="input-card">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-card">
        <label>Monthly Income (INR):</label>
        <input
          type="number"
          placeholder="Enter your income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>

      <div className="proceed-card">
        <button onClick={handleProceed}>Proceed ➜</button>
      </div>

      {/* Motivational Footer */}
      <div className="footer-message">
        <p><strong>Success starts with knowing your worth.</strong></p>
        <p><strong>Only monthly incomes between ₹0 and ₹10,00,00,00,000 are allowed.</strong></p>
      </div>
    </div>
  );
};

export default Welcome;
