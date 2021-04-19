import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Layout from './Layout';

const WebsiteWrapper : React.FC = () => {

    return <div>
            <Header />
            <div>
                <Sidebar />
                <Layout />
            </div>
        </div>
}

export default WebsiteWrapper;