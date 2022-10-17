import React, { useState } from "react";
import { validateMnemonic } from "bip39";

function ConfirmPhrase({ seed, seedPhrase }) {
  const [display, setDisplay] = useState(false);
  const validateSeed = () => {
    const result = validateMnemonic(seedPhrase);
    setDisplay(result);
  };
  return (
    <div>
      <ul>
        {seed.split(" ").map((each, index) => (
          <li key={index}>{each}</li>
        ))}
      </ul>
      <button onClick={validateSeed}>Validate</button>
      {display && <p>It's a Valid</p>}
    </div>
  );
}

export default ConfirmPhrase;
