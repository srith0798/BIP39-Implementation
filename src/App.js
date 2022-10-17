import React, { useState } from "react";
import "./App.css";
import { generateMnemonic } from "bip39";
import ConfirmPhrase from "./seedConfirm";
window.Buffer = window.Buffer || require("buffer").Buffer; // For Buffer
const seed = generateMnemonic();
function App() {
  const [seedPhrase, setSeedPhrase] = useState("");
  return (
    <div>
      <h1>Mnemonic Seed</h1>
      <p>The Random Generated Seed: {seed}</p>
      <label>Enter the Seed :</label>
      <input
        type="text"
        onChange={(e) => {
          setSeedPhrase(e.target.value);
        }}
        value={seedPhrase}
      />
      <ConfirmPhrase seed={seed} seedPhrase={seedPhrase} />
    </div>
  );
}

export default App;
