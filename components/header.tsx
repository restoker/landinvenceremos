'use client';

import { useEffect, useRef, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navigation = [
    { name: 'Inicio', href: 'hero-section' },
    { name: 'Principios', href: 'principles-section' },
    { name: 'Plan de trabajo', href: 'work-plan-section' },
    // { name: 'Company', href: '#' },
]

const Header = () => {
    // TODO: implement section to

    const goToAboutRef = useRef<(to: string) => void | string>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const scrollTo = (to: string) => {
            const section = document.getElementById(to);
            if (!section) return;
            if (to === 'hero-section') {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                });
                return;
            }
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
        goToAboutRef.current = scrollTo;
    }, [])

    return (
        <>
            <header className="inset-x-0 top-0 z-50 bg-white/5 backdrop-blur-xl dark:bg-zinc-900/5">
                <nav aria-label="Global" className="flex items-center justify-between p-3 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                sizes='100vw'
                                height={0}
                                width={0}
                                loading='eager'
                                alt=""
                                src="/img/logo.svg"
                                className="h-16 w-auto dark:hidden"
                            />
                            <Image
                                sizes='100vw'
                                height={0}
                                width={0}
                                loading='eager'
                                alt=""
                                src="/img/logo.svg"
                                className="h-16 w-auto not-dark:hidden"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 dark:text-gray-400"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="text-sm/6 font-semibold text-gray-900 dark:text-white"
                                onClick={() => goToAboutRef.current?.(item.href)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {/* <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a> */}
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image
                                    sizes='100vw'
                                    height={0}
                                    width={0}
                                    loading='eager'
                                    alt=""
                                    src="/img/logo.svg"
                                    className="h-8 w-auto dark:hidden"
                                />
                                <Image
                                    loading='eager'
                                    sizes='100vw'
                                    height={0}
                                    width={0}
                                    alt=""
                                    src="/img/logo.svg"
                                    className="h-8 w-auto not-dark:hidden"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <div
                                            key={item.name}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                            onClick={() => goToAboutRef.current?.(item.href)}
                                        >
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                                {/* <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                    >
                                        Log in
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </>
    )
}

export default Header