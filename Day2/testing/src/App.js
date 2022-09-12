// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import CardInfo from "./CardInfo";

const App = () => {
  const listInfo = [
    {
      name: "Nguyen Van A",
      age: "20",
      gender: "male",
    },
    {
      name: "Nguyen Van B",
      age: "21",
      gender: "female",
    },
    {
      name: "Nguyen Van C",
      age: "22",
      gender: "male",
    },
  ];

  return (
    // style inline
    // <div className="card">
    //   <CardInfo name="Nguyen Van A" age="20" gender="male" />
    //   <CardInfo name="Nguyen Van B" age="21" gender="female"></CardInfo>

    // </div>

    // SỬ DỤNG HÀM MAP: ĐƯỢC SỬ DỤNG ĐỂ IN RA -- KEY RẤT QUAN TRỌNG ĐỂ BIẾT VỊ TRÍ CARD THỨ BAO NHIÊU
    <div className="card">
      {listInfo.map((e, index) => {
       
        return <CardInfo  key={index} name={e.name} age={e.age} gender={e.gender} />;
      })}
    </div>
  );
};

export default App;
