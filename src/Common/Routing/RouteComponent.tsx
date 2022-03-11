import { Route } from 'react-router-dom';

interface RouteComponentProps {
    path: string;
    element: JSX.Element;
}

const RouteComponent = (props: RouteComponentProps) => {
    return <Route path={props.path} element={props.element}/>
}

export { RouteComponent };
export type { RouteComponentProps };