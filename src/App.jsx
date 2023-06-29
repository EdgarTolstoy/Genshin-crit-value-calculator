import React, { useState } from "react";

function App() {
  const [critDmg, setCritDmg] = useState("");
  const [critRate, setCritRate] = useState("");
  const [critValue, setCritValue] = useState(0);

  const calculateCritValue = () => {
    const parsedCritDmg = parseFloat(critDmg);
    const parsedCritRate = parseFloat(critRate);

    if (!isNaN(parsedCritDmg) && !isNaN(parsedCritRate)) {
      const result = parsedCritDmg + 2 * parsedCritRate;
      setCritValue(result);
    } else {
      setCritValue(0);
    }
  };

  return (
    <div>
      <h1>Critical Value Calculator</h1>
      <label>
        Critical Damage:
        <input
          type="text"
          value={critDmg}
          pattern="^(\d+(\.\d{0,2})?|\.\d{1,2})$"
          onChange={(e) => setCritDmg(e.target.value)}
        />
      </label>
      <br />
      <label>
        Critical Rate:
        <input
          type="text"
          value={critRate}
          pattern="^(\d+(\.\d{0,2})?|\.\d{1,2})$"
          onChange={(e) => setCritRate(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateCritValue}>Calculate</button>
      <br />
      <label>
        Critical Value:
        <input type="number" value={critValue} readOnly />
      </label>
    </div>
  );
}


export default App