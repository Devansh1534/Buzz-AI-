"use client" 

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("f700fd85-fd0b-4e59-b5d5-1d01fc32ee74")
    },[]);

    return null;
}