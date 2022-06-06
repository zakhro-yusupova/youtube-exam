import React from "react";
import { Context } from "../../context/Theme";

const useTheme = () => {

  const ctx = React.useContext(Context);

  return[ctx.state, ctx.setState]
}

export default useTheme;