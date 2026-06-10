'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const CardSection = () => {

    const rootRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Your GSAP code here
        const root = rootRef.current;
        if (!root) return;
        const container = root.querySelector('.container');
        const cardsContainer = root.querySelector('.cards');
        const cards = root.querySelectorAll('.card');

        const distance = cardsContainer!.clientWidth - window.innerWidth

        // gsap.to('.scroll', {
        //     autoAlpha: 0,
        //     duration: 0.2,
        //     scrollTrigger: {
        //         trigger: cardsContainer,
        //         start: 'top top',
        //         end: 'top top-=1',
        //         toggleActions: "play none reverse none"
        //     }
        // })

        const scrollTween = gsap.to(cardsContainer, {
            x: - distance,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: true,
                start: 'top top',
                end: '+=' + distance
            }
        })

        let transformBetweenTwoTicks = 0;
        let oldTransform = 0;
        function tick() {
            const currentTransform = gsap.getProperty(cardsContainer, "x") as number;
            transformBetweenTwoTicks = currentTransform - oldTransform;
            oldTransform = currentTransform;
        }

        cards.forEach(card => {
            ScrollTrigger.create({
                trigger: card,
                containerAnimation: scrollTween,
                start: 'left 100%',
                end: 'right 0%',
                onEnter: () => {
                    transformCard(card.children[0]);
                },
                onEnterBack: () => {
                    transformCard(card.children[0]);
                }
            })
        })

        function transformCard(el: Element) {
            gsap.fromTo(el, {
                xPercent: -transformBetweenTwoTicks * 3,
            }, {
                xPercent: 0,
                ease: 'power3.out',
                duration: 0.7
            })
        }

        // PLAY/PAUSE TICKER WHEN IN/OFF SCREEN
        ScrollTrigger.create({
            trigger: root,
            onEnter: () => { gsap.ticker.add(tick) },
            onLeave: () => { gsap.ticker.remove(tick) },
            onEnterBack: () => { gsap.ticker.add(tick) },
            onLeaveBack: () => { gsap.ticker.remove(tick) },
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, { dependencies: [rootRef], scope: rootRef });

    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <section ref={rootRef} className="mwg_effect087 text-white relative">
                        {/* <p className="scroll">Scroll</p> */}
                        <div className="container">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-content">
                                        {/* <p className="top">A beautiful resource for crafting stunning, well-made animations. It pushes your creative limits with the power of GSAP. You’ll be building high-end animations in minutes.</p> */}
                                        {/* <div className="bottom"> */}
                                        <Image src="/img/01.avif" alt="" width={0} height={0} sizes='100vw' className='w-full h-auto rounded-2xl' loading="eager" />
                                        {/* <p>Lucas Bigot <br />Creative Developer <br />Locomotive</p> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content">
                                        {/* <p className="top">MWG is a total gem. It gets a big thumbs-up from the GSAP team. The effects are gorgeous, the tutorials are clear, and the code is beautifully structured.</p> */}
                                        {/* <div className="bottom"> */}
                                        <Image src="/img/02.avif" alt="" width={0} height={0} sizes='100vw' className='w-full h-auto rounded-2xl' />
                                        {/* <p>Cassie Evans <br />Developer Education <br />Greensock, Gsap</p> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content">
                                        {/* <p className="top">MWG taught me new ways to approach things and improve my animations. I wish a tool like this had existed when I was starting out.</p> */}
                                        {/* <div className="bottom"> */}
                                        <Image src="/img/03.avif" alt="" width={0} height={0} sizes='100vw' className='w-full h-auto rounded-2xl' />
                                        {/* <p>Henri Heymans <br />Creative Developer <br />Propagande</p> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content">
                                        {/* <p className="top">Using MWG is a plug-and-play experience. No bloated code, no overengineering, just efficient code. I can say it’s the best ressource for creative developers!</p> */}
                                        {/* <div className="bottom"> */}
                                        <Image src="/img/04.avif" alt="" width={0} height={0} sizes='100vw' className='w-full h-auto rounded-2xl' />
                                        {/* <p>Reksa Andhika <br />Creative Developer</p> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content">
                                        {/* <p className="top">MWG's repository has been an enormous ally in crafting memorable experiences. It's a tool that was missing from our creative community, and I'm glad we now have it.</p> */}
                                        {/* <div className="bottom"> */}
                                        <Image src="/img/05.avif" alt="" width={0} height={0} sizes='100vw' className='size-full rounded-2xl' />
                                        {/* <p>Victor Work <br />Creative Developer</p> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content">
                                        {/* <p className="top">Performance tips, explanations, accessibility, mobile adjustments. You can also pick different parts of effects and combine them. Really opened my eyes on how to use GSAP.</p> */}
                                        {/* <div className="bottom"> */}
                                        <Image src="/img/06.avif" alt="" width={0} height={0} sizes='100vw' className='w-full h-auto rounded-2xl' />
                                        {/* <p>Eduard Bodak <br />Webflow Developer</p> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content">
                                        {/* <p className="top">A beautiful resource for crafting stunning, well-made animations. It pushes your creative limits with the power of GSAP. You’ll be building high-end animations in minutes.</p> */}
                                        {/* <div className="bottom"> */}
                                        <Image src="/img/07.avif" alt="" width={0} height={0} sizes='100vw' className='w-full h-auto rounded-2xl' />
                                        {/* <p>Lucas Bigot <br />Creative Developer <br />Locomotive</p> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content">
                                        {/* <p className="top">MWG is a total gem. It gets a big thumbs-up from the GSAP team. The effects are gorgeous, the tutorials are clear, and the code is beautifully structured.</p> */}
                                        {/* <div className="bottom"> */}
                                        <Image src="/img/08.avif" alt="" width={0} height={0} sizes='100vw' className='w-full h-auto rounded-2xl' />
                                        {/* <p>Cassie Evans <br />Developer Education <br />Greensock, Gsap</p> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content">
                                        {/* <p className="top">MWG taught me new ways to approach things and improve my animations. I wish a tool like this had existed when I was starting out.</p> */}
                                        {/* <div className="bottom"> */}
                                        <Image src="/img/09.avif" alt="" width={0} height={0} sizes='100vw' className='w-full h-auto rounded-2xl' />
                                        {/* <p>Henri Heymans <br />Creative Developer <br />Propagande</p> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                                {/* <div className="card">
                            <div className="card-content">
                                <p className="top">Using MWG is a plug-and-play experience. No bloated code, no overengineering, just efficient code. I can say it’s the best ressource for creative developers!</p>
                                <div className="bottom">
                                    <img src="assets/medias/4.png" alt="" />
                                    <p>Reksa Andhika <br />Creative Developer</p>
                                </div>
                            </div>
                        </div> */}
                                {/* <div className="card">
                            <div className="card-content">
                                <p className="top">MWG's repository has been an enormous ally in crafting memorable experiences. It's a tool that was missing from our creative community, and I'm glad we now have it.</p>
                                <div className="bottom">
                                    <img src="assets/medias/5.png" alt="" />
                                    <p>Victor Work <br />Creative Developer</p>
                                </div>
                            </div>
                        </div> */}
                                {/* <div className="card">
                            <div className="card-content">
                                <p className="top">Performance tips, explanations, accessibility, mobile adjustments. You can also pick different parts of effects and combine them. Really opened my eyes on how to use GSAP.</p>
                                <div className="bottom">
                                    <img src="assets/medias/6.png" alt="" />
                                    <p>Eduard Bodak <br />Webflow Developer</p>
                                </div>
                            </div>
                        </div> */}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default CardSection