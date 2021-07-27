import React, { Fragment, useState } from "react";
import HeaderLogged from "../../../components/header_logged";
import Bios from "../../../components/bios";

const BiosScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Bios setIsOpen={setIsOpen} isOpen={isOpen} />
    </Fragment>
  );
};

export default BiosScreen;
