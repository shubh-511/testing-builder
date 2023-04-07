import React from "react";
import { createComponent } from '@lit-labs/react';
import { QuickLinkCardPattern } from "../spacekit.min.esm.js";

const QuickLinkCardPatterns = createComponent({
    react: React,
    elementClass: QuickLinkCardPattern,
    tagName: 'space-quicklink-pattern',
});

export default QuickLinkCardPatterns;
