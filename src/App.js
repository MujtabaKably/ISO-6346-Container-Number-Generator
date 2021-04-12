import "./styles.css";
import ContainerValidator from "container-validator";
import { useState } from "react";

export default function App() {
  const validator = new ContainerValidator();
  const [ownerCode, setOwnerCode] = useState("TEX");
  const [productCode, setProductCode] = useState("U");
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);
  return (
    <div className="App">
      <h1>Gen Container Codes</h1>
      <div>
        <label>Owner Code: </label>
        <input
          value={ownerCode}
          maxLength="3"
          onChange={({ target: { value } }) => {
            setOwnerCode(value.toUpperCase());
          }}
          style={{ width: "250px" }}
        />
      </div>
      <div>
        <label>Product Category: </label>
        <select
          style={{ width: "250px" }}
          value={productCode}
          onChange={({ target: { value } }) => {
            setProductCode(value.toUpperCase());
          }}
        >
          <option value="U">U</option>
          <option value="J">J</option>
          <option value="Z">Z</option>
        </select>
      </div>
      <div>
        <label>Start: </label>
        <input
          value={start}
          type="number"
          maxLength="6"
          onChange={({ target: { value } }) => {
            setStart(value);
          }}
          style={{ width: "250px" }}
        />
      </div>
      <div>
        <label>End: </label>
        <input
          value={end}
          maxLength="6"
          type="number"
          onChange={({ target: { value } }) => {
            setEnd(value);
          }}
          style={{ width: "250px" }}
        />
      </div>
      <div style={{ wordBreak: "break-all", padding: "20px" }}>
        {validator
          .generate(ownerCode, productCode, start, end)
          .filter(Boolean)
          .map((code) => (
            <div key={code}>{code}</div>
          ))}
      </div>
    </div>
  );
}
