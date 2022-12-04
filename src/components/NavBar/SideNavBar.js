import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import "./sideBar.css";
const SideNavBar = () => {
  return (
    <>
      <Sidebar>
        <Menu>
          <MenuItem
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree

                return {
                  color: disabled ? "#f5d9ff" : "#d359ff",
                  backgroundColor: active ? "#17d193 " : "#000000",
                };
              },
            }}
            routerLink={<Link to="/saveEmployee" />}
          >
            {" "}
            Create Employee
          </MenuItem>

          <MenuItem
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    color: disabled ? "#f5d9ff" : "#d359ff",
                    backgroundColor: active ? "#eecef9" : undefined,
                  };
              },
            }}
            routerLink={<Link to="/viewEmployee" />}
          >
            {" "}
            View Employees
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideNavBar;
