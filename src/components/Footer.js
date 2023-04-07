import React from "react";
import { createComponent } from '@lit-labs/react';
import { FooterTypeTwo } from "../spacekit.min.esm.js";

const Footer = createComponent({
    react: React,
    elementClass: FooterTypeTwo,
    tagName: 'space-footer-type-two',
});

export default Footer;
