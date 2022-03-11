import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { RouteComponentProps } from "./RouteComponent";

interface NavComponentProps extends RouteComponentProps {
    icon: any;
    itemName: string;
}

const NavComponent = (props: NavComponentProps) => {
    const handleNav = () => {
        
    }
    
    return <ListItem onClick={handleNav}>
        <ListItemIcon>

        </ListItemIcon>
        <ListItemText>

        </ListItemText>
    </ListItem>


}

export { NavComponent };
export type { NavComponentProps };