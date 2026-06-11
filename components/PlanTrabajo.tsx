'use client';

import { createPluginRegistration } from '@embedpdf/core';
import { EmbedPDF } from '@embedpdf/core/react';
import { usePdfiumEngine } from '@embedpdf/engines/react';
// import { useZoom } from '@embedpdf/plugin-zoom/react';

// Import the essential plugins
import { Viewport, ViewportPluginPackage } from '@embedpdf/plugin-viewport/react';
import { Scroller, ScrollPluginPackage } from '@embedpdf/plugin-scroll/react';
import {
    DocumentContent,
    DocumentManagerPluginPackage,
} from '@embedpdf/plugin-document-manager/react';
import { RenderLayer, RenderPluginPackage } from '@embedpdf/plugin-render/react';
import { ZoomPluginPackage, ZoomMode } from '@embedpdf/plugin-zoom/react';
// import { ZoomToolbar } from './ZoomToolbar';
import { PDFViewer } from '@embedpdf/react-pdf-viewer';
// 1. Register the plugins you need
const plugins = [
    createPluginRegistration(DocumentManagerPluginPackage, {
        initialDocuments: [{ url: '/img/ULTIMO.pdf' }],
    }),
    createPluginRegistration(ViewportPluginPackage),
    createPluginRegistration(ScrollPluginPackage),
    createPluginRegistration(RenderPluginPackage),
    createPluginRegistration(ZoomPluginPackage, {
        defaultZoomLevel: ZoomMode.FitPage, // You can pass options here!
    }),
];

// import dynamic from 'next/dynamic';

// Link the canvas worker to a CDN source for processing
const PlanTrabajo = ({ fileUrl = '/img/PLAN-DE-TRABAJO-VLADI-ARANYA.pdf' }: { fileUrl?: string }) => {
    const { engine, isLoading } = usePdfiumEngine();

    if (isLoading || !engine) {
        return <div>Loading PDF Engine...</div>;
    }

    return (
        <div className='relative h-dvh overflow-hidden'>
            {/* <ZoomToolbar documentId={fileUrl} /> */}
            <PDFViewer
                className='h-125'
                config={{
                    src: fileUrl,
                    // theme: { preference: 'light' }
                }}
            />
        </div>
    );
};
// export dynamic component
export default PlanTrabajo;

// export const PlanTrabajoDynamic = dynamic(
//     () => Promise.resolve(PlanTrabajo),
//     { ssr: false }
// );
