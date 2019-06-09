import React, { useState } from "react";

import { Wrapper, Canvas } from "./Wrapper";

export default function App() {
  const [ul, changeUl] = useState(false);
  const [um, changeUm] = useState(false);
  const [ur, changeUr] = useState(false);
  const [ml, changeMl] = useState(false);
  const [mm, changeMm] = useState(false);
  const [mr, changeMr] = useState(false);
  const [ll, changeLl] = useState(false);
  const [lm, changeLm] = useState(false);
  const [lr, changeLr] = useState(false);
  return (
    <Wrapper>
      <Canvas className="ul" />
      <Canvas className="um" />
    </Wrapper>
  );
}
