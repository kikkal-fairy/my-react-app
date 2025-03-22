// import React, { useState } from "react";

// const ActivitiesFor = () => {
//   const [selected, setSelected] = useState("Career Adviser"); // Default selected

//   return (
//     <div className="activities-container">
//       <h2>Activities For</h2>
//       <div className="activities-box">
//         <div
//           className={`activity ${selected === "Individual" ? "selected" : ""}`}
//           onClick={() => setSelected("Individual")}
//         >
//           <img src="/icons/individual-icon.png" alt="Individual" />
//           <p>Individual</p>
//         </div>

//         <div
//           className={`activity ${selected === "Career Adviser" ? "selected" : ""}`}
//           onClick={() => setSelected("Career Adviser")}
//         >
//           <img src="/icons/career-adviser-icon.png" alt="Career Adviser" />
//           <p>Career Adviser</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActivitiesFor;
import React, { useState } from "react";
import individualIcon from "../assets/individual-icon.jpg";
import careerIcon from "../assets/career-adviser-icon.jpg";

const ActivitiesFor = () => {
  const [selected, setSelected] = useState("Individual");

  return (
    <div className="activities-container">
      <h2>Activities For</h2>
      <div className="activities-box">
        {/* Individual Button */}
        <div
          className={`activity ${selected === "Individual" ? "selected" : ""}`}
          onClick={() => setSelected("Individual")}
        >
          <img src={individualIcon} alt="Individual" className="activity-icon" />
          <p>Individual</p>
        </div>

        {/* Career Adviser Button */}
        <div
          className={`activity ${selected === "Career Adviser" ? "selected" : ""}`}
          onClick={() => setSelected("Career Adviser")}
        >
          <img src={careerIcon} alt="Career Adviser" className="activity-icon" />
          <p>Career Adviser</p>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesFor;
