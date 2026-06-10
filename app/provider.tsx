'use client';

import { ReactLenis } from 'lenis/react';

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        // <ReactLenis root>
        <div>
            {children}
        </div>
        // </ReactLenis>
    );
}