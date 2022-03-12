import { ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavComponentProps {
  icon: any;
  itemName: string;
  path: string;
}

const NavComponent = (props: NavComponentProps) => {
  let navigate = useNavigate();
  let theme = useTheme();

  return (
    <ListItem sx={{px: theme.spacing(0)}}>
      <ListItemButton sx={{px: theme.spacing(4)}}
      onClick={() => navigate(props.path)}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText>{props.itemName}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export { NavComponent };
export type { NavComponentProps };
