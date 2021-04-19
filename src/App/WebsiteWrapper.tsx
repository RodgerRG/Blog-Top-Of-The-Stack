import React from 'react';

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