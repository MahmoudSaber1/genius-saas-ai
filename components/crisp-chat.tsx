"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("d0c3e299-735e-4de9-aa12-c15dabe71b10");
    }, []);

    return null;
};
