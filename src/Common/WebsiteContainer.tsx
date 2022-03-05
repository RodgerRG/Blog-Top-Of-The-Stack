import { Fragment } from 'react';
import { ContentWrapper } from './ContentWrapper';
import { Footer } from './Footer';
import { Header } from './Header';

const WebsiteContainer = () => {
    return <Fragment>
        <Header title="Top of the Stack" />
        <ContentWrapper>
            
        </ContentWrapper>
        <Footer versionNumber={process.env.REACT_APP_VERSION_NUMBER ?? "1"}/>
    </Fragment>
}