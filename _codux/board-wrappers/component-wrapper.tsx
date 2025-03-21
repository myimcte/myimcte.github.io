import { createRemixStub } from '@remix-run/testing';
import { PropsWithChildren } from 'react';

export interface ComponentWrapperProps extends PropsWithChildren {
    loaderData?: Record<string, unknown>;
}

export default function ComponentWrapper({ children, loaderData }: ComponentWrapperProps) {
    const RemixStub = createRemixStub([
        {
            Component: () => children,
            ErrorBoundary: () => children,
        },
    ]);

    return <RemixStub hydrationData={{ loaderData }} />;
}
