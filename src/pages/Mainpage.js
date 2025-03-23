// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const MainPage = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const name = params.get("name");
//   const income = params.get("income");

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/income/${income}`)
//       .then((res) => res.json())
//       .then((result) => {
//         console.log("API Response:", result);  // Debugging log
//         setData(result);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [income]);

//   return (
//     <div style={{ textAlign: "center", padding: "50px" }}>
//       <h1>Welcome, {name}!</h1>
//       <h2>Your Financial Status:</h2>
//       {data ? (
//         <div>
//           <p><strong>Income Percentile:</strong> {data.income_rank_percent}</p>
//           <p><strong>Social Status:</strong> {data.social_status}</p>
//           <p><strong>Car Affordability:</strong> {data.car_affordability}</p>
//           <p><strong>House Location:</strong> {data.house_location}</p>
//           <p><strong>Land Buying Capacity:</strong> {data.land_buying_capacity}</p>
//           <p><strong>Lifestyle:</strong> {data.lifestyle}</p>
//           <p><strong>Lifetime Savings:</strong> {data.lifetime_savings}</p>
//           <p><strong>Net Worth:</strong> {data.net_worth}</p>
//           <p><strong>Loan Eligibility:</strong> {data.loan_eligibility}</p> {/* Added Loan Eligibility */}
//           <p><strong>Gold Affordability:</strong> {data.gold_affordability}</p> {/* Added Gold Affordability */}
//           <p><strong>Spending Capacity:</strong> {data.spending_capacity}</p> {/* Added Spending Capacity */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default MainPage;


// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./Mainpage.css";


// const MainPage = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const name = params.get("name");
//   const income = params.get("income");

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/income/${income}`)
//       .then((res) => res.json())
//       .then((result) => {
//         console.log("API Response:", result);
//         setData(result);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [income]);

//   return (
//     <div className="main-container">
//       <h1 className="main-title">Welcome, {name}!</h1>
//       <h2 className="financial-status">Your Financial Status:</h2>

//       {data ? (
//         <div className="cards-container">
//           <div className="info-card"><strong>Income Percentile:</strong> {data.income_rank_percent}</div>
//           <div className="info-card"><strong>Social Status:</strong> {data.social_status}</div>
//           <div className="info-card"><strong>Car Affordability:</strong> {data.car_affordability}</div>
//           <div className="info-card"><strong>House Location:</strong> {data.house_location}</div>
//           <div className="info-card"><strong>Land Buying Capacity:</strong> {data.land_buying_capacity}</div>
//           <div className="info-card"><strong>Lifestyle:</strong> {data.lifestyle}</div>
//           <div className="info-card"><strong>Lifetime Savings:</strong> {data.lifetime_savings}</div>
//           <div className="info-card"><strong>Net Worth:</strong> {data.net_worth}</div>
//           <div className="info-card"><strong>Loan Eligibility:</strong> {data.loan_eligibility}</div>
//           <div className="info-card"><strong>Gold Affordability:</strong> {data.gold_affordability}</div>
//           <div className="info-card"><strong>Spending Capacity:</strong> {data.spending_capacity}</div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default MainPage;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "./Mainpage.css"; // Import styling

const MainPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const income = params.get("income");

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/income/${income}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("API Response:", result);
        setData(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [income]);

  return (
    <div className="main-container">
      {/* Heading */}
      <h1 className="main-title">Welcome, {name}!</h1>

      {/* Subtitle */}
      <h2 className="financial-status">Your Financial Status:</h2>

      {/* Card Container */}
      <div className="cards-container">
        {data ? (
          <>
            <div className="info-card">
              <i className="bi bi-bar-chart-fill icon"></i>
              <p><strong>Income Percentile:</strong> {data.income_rank_percent}</p>
            </div>
            <div className="info-card">
              <i className="bi bi-person-fill icon"></i>
              <p><strong>Social Status:</strong> {data.social_status}</p>
            </div>
            <div className="info-card">
              <i className="bi bi-car-front-fill icon"></i>
              <p><strong>Car Affordability:</strong> {data.car_affordability}</p>
            </div>
            <div className="info-card">
              <i className="bi bi-house-door-fill icon"></i>
              <p><strong>House Location:</strong> {data.house_location}</p>
            </div>
            <div className="info-card">
              <i className="bi bi-geo-alt-fill icon"></i>
              <p><strong>Land Buying Capacity:</strong> {data.land_buying_capacity}</p>
            </div>
            <div className="info-card">
              <i className="bi bi-gem icon"></i>
              <p><strong>Lifestyle:</strong> {data.lifestyle}</p>
            </div>
            <div className="info-card">
              <i className="bi bi-piggy-bank-fill icon"></i>
              <p><strong>Lifetime Savings:</strong> {data.lifetime_savings}</p>
            </div>
            <div className="info-card">
              <i className="bi bi-cash-stack icon"></i>
              <p><strong>Net Worth:</strong> {data.net_worth}</p>
            </div>
            <div className="info-card">
              <i className="bi bi-credit-card-2-front-fill icon"></i>
              <p><strong>Loan Eligibility:</strong> {data.loan_eligibility}</p>
            </div>
            <div className="info-card">
              <i className="bi bi-coin icon"></i>
              <p><strong>Gold Affordability:</strong> {data.gold_affordability}</p>
            </div>
            <div className="info-card">
              <i className="bi bi-wallet2 icon"></i>
              <p><strong>Spending Capacity:</strong> {data.spending_capacity}</p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
