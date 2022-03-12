import { List, ListSubheader, SwipeableDrawer, Typography, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../Redux/rtkHooks";
import { toggleNav } from "../Redux/Slices/headerSlice";
import { generateNavItems } from "../Routing/GenerateNavItems";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.header.navOpen);

  let theme = useTheme();

  return (
    <SwipeableDrawer
      onClose={() => dispatch(toggleNav(""))}
      onOpen={() => dispatch(toggleNav(""))}
      open={open}
    >
      <List sx={{width: '100vw', [theme.breakpoints.up('sm')]: {width: '250px'}}}>
        <ListSubheader>
           Top of The Stack
        </ListSubheader>
        {generateNavItems()}
      </List>
    </SwipeableDrawer>
  );
};

export { NavBar };
