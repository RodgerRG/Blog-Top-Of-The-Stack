import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
    title: string;
}

const Header = (props : HeaderProps) => {
    return <AppBar>
        <Toolbar>
        <IconButton>
            <MenuIcon />
        </IconButton>
        <Typography sx={{flexGrow: 1}}>
            {props.title}
        </Typography>
        </Toolbar>
    </AppBar>
}

export { Header }
export type { HeaderProps }