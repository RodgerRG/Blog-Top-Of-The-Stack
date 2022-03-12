import { Fragment } from 'react';
import { ContentWrapper } from './ContentWrapper';
import { Footer } from './Footer';
import { Header } from './Header';

interface WebsiteContainerProps {
    child: React.ReactNode;
}

const WebsiteContainer = (props: WebsiteContainerProps) => {
    return <Fragment>
        <Header title="Top of the Stack" />
        <ContentWrapper>
            {props.child}
        </ContentWrapper>
        <Footer versionNumber={process.env.REACT_APP_VERSION_NUMBER ?? "1"}/>
    </Fragment>
}

export { WebsiteContainer };