import React, { PropsWithChildren } from 'react';

export function composeNestedComponents(orderedNestedComponents: Array<any>) {
    return orderedNestedComponents.reduce((Prev, Cur) => ({ children }: PropsWithChildren) => (
        <Prev>
            <Cur>{children}</Cur>
        </Prev>
    ));
}
