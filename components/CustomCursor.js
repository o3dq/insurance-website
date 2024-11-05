"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
    useEffect(() => {
        const cursorCircle = document.querySelector(".custom-cursor-circle");
        const cursorPoint = document.querySelector(".custom-cursor-point");

        window.addEventListener("mousemove", (event) => {
            cursorPoint.style.left = `${event.clientX}px`
            cursorPoint.style.top = `${event.clientY}px`

            cursorCircle.animate({
                left: `${event.clientX}px`,
                top: `${event.clientY}px`
            }, { fill: "forwards", duration: 500 })
        });
    }, []);

    return (
        <>
            <div
                className="custom-cursor-point"
            />
            <div
                className="custom-cursor-circle"
            />
        </>
    );
}