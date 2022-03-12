import { Home } from "@mui/icons-material";
import { NavComponent, NavComponentProps } from "./NavComponent";

const NavItems : NavComponentProps[] = [
    {
        icon: <Home />,
        itemName: "Home",
        path: "/"
    }
]

const generateNavItems = () => {
    return NavItems.map(item => <NavComponent {...item} key={`nav-item-${item.itemName}`}/>);
}


export { generateNavItems };
