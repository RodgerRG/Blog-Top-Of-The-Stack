import { Box, ButtonGroup, Toolbar, Typography } from '@mui/material';
import React from 'react';

interface FooterProps {
    versionNumber: string;
}

const Footer = (props : FooterProps) => {
    return <Box>
        <Toolbar>
            <Typography sx={{flexGrow: 1}}>
                
            </Typography>
            <ButtonGroup>
                
            </ButtonGroup>
            <Typography>
                {props.versionNumber}
            </Typography>
        </Toolbar>
    </Box>
}

export { Footer };
export type { FooterProps }