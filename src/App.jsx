import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Table from "./components/Table";

function App() {
  //tadinya state dan handlechange ada di Inputs.jsx tp dipindahin biar bisa diakses Table.jsx
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    //setUserInput memiliki parameter utk mengupdate object userInput in a immutable way(best practice)
    setUserInput((prevUserInput) => {
      //dia mereturn object, diobjectnya ada 2 anggota, yaitu object yg lama dan fungsi pengganti nilai salah satu property.
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const validDuration = userInput.duration >= 1;

  return (
    <>
      <Header />
      <Inputs onChange={handleChange} userInputForInputs={userInput} />
      {validDuration ? (
        <Table userInputForTable={userInput} />
      ) : (
        <h3 className="center">
          Please enter valid duration greater than zero
        </h3>
      )}
    </>
  );
}

export default App;
