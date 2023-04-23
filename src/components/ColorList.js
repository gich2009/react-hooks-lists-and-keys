import React from "react";

//Instead of using props, I destructured the props object in the parameter list of the ColorItem component.
function ColorItem({color}){
  return <li style={{color: color}}>{color}</li>;
}

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((color) => <ColorItem key={color} color={color}/>);

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
        {/*The lines below were the original code but they have been commented out for the code along.*/}
        {/* <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li> */}
      </ol>
    </div>
  );
}

export default ColorList;
