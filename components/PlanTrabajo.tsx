'use client';

import { createPluginRegistration } from '@embedpdf/core';
import { EmbedPDF } from '@embedpdf/core/react';
import { usePdfiumEngine } from '@embedpdf/engines/react';
import { useZoom } from '@embedpdf/plugin-zoom/react';

// Import the essential plugins
import { Viewport, ViewportPluginPackage } from '@embedpdf/plugin-viewport/react';
import { Scroller, ScrollPluginPackage } from '@embedpdf/plugin-scroll/react';
import {
    DocumentContent,
    DocumentManagerPluginPackage,
} from '@embedpdf/plugin-document-manager/react';
import { RenderLayer, RenderPluginPackage } from '@embedpdf/plugin-render/react';
import { ZoomPluginPackage, ZoomMode } from '@embedpdf/plugin-zoom/react';
import { ZoomToolbar } from './ZoomToolbar';

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
const PlanTrabajo = ({ fileUrl = '/img/ULTIMO.pdf' }: { fileUrl?: string }) => {
    const { engine, isLoading } = usePdfiumEngine();

    if (isLoading || !engine) {
        return <div>Loading PDF Engine...</div>;
    }

    return (
        <div style={{ height: '500px' }}>
            <ZoomToolbar documentId={fileUrl} />
            <EmbedPDF engine={engine} plugins={plugins}>
                {({ activeDocumentId }) =>
                    activeDocumentId && (
                        <DocumentContent documentId={activeDocumentId}>
                            {({ isLoaded }) =>
                                isLoaded && (
                                    <Viewport
                                        documentId={activeDocumentId}
                                        style={{
                                            backgroundColor: '#f1f3f5',
                                        }}
                                    >
                                        <Scroller
                                            documentId={activeDocumentId}
                                            renderPage={({ width, height, pageIndex }) => (
                                                <div style={{ width, height }}>
                                                    {/* The RenderLayer is responsible for drawing the page */}
                                                    <RenderLayer
                                                        documentId={activeDocumentId}
                                                        pageIndex={pageIndex}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </Viewport>
                                )
                            }
                        </DocumentContent>
                    )
                }
            </EmbedPDF>
        </div>
    );
};
// export dynamic component
export default PlanTrabajo;

// export const PlanTrabajoDynamic = dynamic(
//     () => Promise.resolve(PlanTrabajo),
//     { ssr: false }
// );
