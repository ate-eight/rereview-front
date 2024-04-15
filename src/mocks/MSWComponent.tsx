'use client';
import React, { useEffect, useState } from 'react';

interface Props {
    children: React.ReactNode;
}

const MSWComponent = ({ children }: Props) => {
    const [isMswInit, setIsMswInit] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
            // msw env 설정
            if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
                if (typeof window === 'undefined') {
                    const { server } = await import('./server');
                    server.listen();
                } else {
                    const { worker } = await import('./browser');
                    await worker.start();
                }
                setIsMswInit(true);
            }
        };

        if (!isMswInit) {
            init();
        }
    }, [isMswInit]);

    if (!isMswInit) {
        return null;
    }

    return <>{children}</>;
};

export default MSWComponent;
