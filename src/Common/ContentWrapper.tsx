import { Container } from '@mui/material';
import React from 'react';

interface ContentWrapperProps {
    children: React.ReactNode[] | React.ReactNode;
}

const ContentWrapper = (props : ContentWrapperProps) => {
    return <Container maxWidth="sm">
        {props.children}
    </Container>
}

export {ContentWrapper};
export type {ContentWrapperProps};