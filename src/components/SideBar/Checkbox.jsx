import React from 'react'

export const Checkbox = () => {
  const [checked, setChecked] = React.useState(false)
  const handleClick = () => setChecked(!checked)
  const [state, setState] = React.useState("");
  
  return (
    <>
      <h2>ПУНКТ ВИДАЧІ</h2>
      <div style={{ display: "flex" }}>
        <input
          onChange={(event) => {
            setState(event.target.value);
          }}
          value={state}
          onClick={handleClick}
          checked={checked}
          type="checkbox"
          style={{ top: "16.5px", position: "relative" }}
        />
        <p style={{ display: "flex", margin: "10px" }}>Відділення GUP</p>
      </div>
    </>
  );
};

  export  default Checkbox;

