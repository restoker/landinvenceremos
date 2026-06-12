'use client';

import { usePdfiumEngine } from '@embedpdf/engines/react';
import { PDFViewer } from '@embedpdf/react-pdf-viewer';

const PlanTrabajo = ({ fileUrl = '/img/PLAN-DE-TRABAJO-VLADI-ARANYA.pdf' }: { fileUrl?: string }) => {
    const { engine, isLoading } = usePdfiumEngine();

    if (isLoading || !engine) {
        return <div>Loading PDF Engine...</div>;
    }

    return (
        <div className='relative h-dvh overflow-hidden'>
            {/* <ZoomToolbar documentId={fileUrl} /> */}
            {/* <PDFViewer
                className='h-125'
                config={{
                    src: fileUrl,
                    // theme: { preference: 'light' }
                }}
            /> */}
            <iframe src={fileUrl} className='h-125' style={{ width: '100%', border: 'none' }}></iframe>
        </div>
    );
};
// export dynamic component
export default PlanTrabajo;

// export const PlanTrabajoDynamic = dynamic(
//     () => Promise.resolve(PlanTrabajo),
//     { ssr: false }
// );
