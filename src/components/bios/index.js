import React, { useState, Fragment } from "react";
import "../../styles/bios.scss";
import { push as Menu } from "react-burger-menu";
import {Column, Button} from 'rbx';

const Bios = (props) => {
  return (
    <Fragment>
      <Column.Group className="bios" id="bios">
        <Menu
          pageWrapId={"bios-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"bios"}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <Column.Group>
            <Column size={10} offset={1}>
              Search...
            </Column>
          </Column.Group>
          <p>List...</p>
        </Menu>

        <Column size={12} className="bios-editor" id="bios-editor">
          Editor...
        </Column>
      </Column.Group>
    </Fragment>
  );
};

export default Bios;
