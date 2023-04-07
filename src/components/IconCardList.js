import React from "react";
import { createComponent } from '@lit-labs/react';
import { IconCardPattern } from "../spacekit.min.esm.js";

const IconCardList = createComponent({
    react: React,
    elementClass: IconCardPattern,
    tagName: 'space-iconcard-pattern',
});

export default IconCardList;
