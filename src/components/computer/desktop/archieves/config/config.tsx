import { useState } from "react";
import { StyledConfig } from ".";

export const ConfigColors = () => {
  const [colors, setColors] = useState('')
  return (
    <StyledConfig>
      <h1>Escolha a sua cor favorita!</h1>
      <div>
        <div onClick={() => setColors("purple")} className="purple" />
        <div onClick={() => setColors("blue")} className="blue" />
        <div onClick={() => setColors("red")} className="red" />
        <div onClick={() => setColors("grey")} className="grey" />
        <div onClick={() => setColors("yellow")} className="yellow" />
      </div>
    </StyledConfig>
  )
}