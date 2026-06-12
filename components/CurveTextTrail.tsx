'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

interface TextMeasurer {
    (text: string): number; // The function signature
    canvas?: HTMLCanvasElement; // The custom property
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CurveTextTrail = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const root = containerRef.current;
        if (!root) return;

        // UTIL METHOD
        const getTextWidth: TextMeasurer = (text: string): number => {
            const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
            // console.log(canvas);
            const context = canvas.getContext("2d");
            const computedStyle = window.getComputedStyle(document.querySelector('#textpath') as Element);
            context!.font = computedStyle.font;

            return context!.measureText(text).width;
        }
        // Get the actual text content
        const textPath = root.querySelector('#textpath') as SVGTextElement;
        const text = textPath.textContent.trim();

        // Calculate text width using canvas
        const textPathLength = getTextWidth(text) * 1.25;

        // Calculate final offset percentage
        const pathLength = (root.querySelector('#path') as SVGPathElement).getTotalLength()
        const finalOffset = -(textPathLength * 100 / pathLength)

        gsap.to(textPath, {
            attr: { startOffset: finalOffset + "0%" }, // Here we are targeting an attribute value, not a CSS property
            ease: 'none', // Linear movement
            scrollTrigger: {
                trigger: '.mwg_effect032 .pin-height',
                start: 'top top',
                end: 'bottom bottom',
                pin: '.mwg_effect032 .contenedor',
                scrub: true // Progresses with the scroll
            }
        })


    }, { scope: containerRef, dependencies: [containerRef] })

    return (
        <>
            <section ref={containerRef} className="mwg_effect032 text-zinc-950 dark:text-zinc-100">
                {/* <p className="scroll">Scroll</p> */}

                <div className="pin-height">
                    <div className="contenedor">
                        <p className="header text-4xl">Escuchando a los vecinos, construimos el futuro de San Sebastián 🫶😎🤩.</p>
                        <svg width="1516" height="92" viewBox="0 0 1516 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="path" d="M0 92.0674C528.5 -28.9327 977.5 -32.4328 1516.5 92.0674" stroke="none" />
                            <text id="text">
                                <textPath id="textpath" xlinkHref="#path" startOffset="100%" textAnchor="start">
                                    Orden - Seguridad - Chamba para todos
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CurveTextTrail