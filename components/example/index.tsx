import React from "react";

import useTranslation from "@hooks/translation";

import lng from "./language.json";

const Example = () => {
  const n = useTranslation(lng);

  return <h1>{n("example")}</h1>;
};

export default Example;
