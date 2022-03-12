import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch } from "../Redux/rtkHooks";
import { toggleNav } from "../Redux/Slices/headerSlice";

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  let dispatch = useAppDispatch();
  let theme = useTheme();

  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={() => dispatch(toggleNav(""))} sx={{pr: theme.spacing(3)}}>
          <MenuIcon />
        </IconButton>
        <Typography sx={{ flexGrow: 1 }} variant="h5" component="h1">{props.title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
export type { HeaderProps };
