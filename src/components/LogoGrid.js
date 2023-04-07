import React from "react";
import { createComponent } from '@lit-labs/react';
import { LogoGrids } from "../spacekit.min.esm.js";

const LogoGrid = createComponent({
    react: React,
    elementClass: LogoGrids,
    tagName: 'space-logo-grids',
});

export default LogoGrid;
