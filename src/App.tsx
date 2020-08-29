import React from 'react';
import ReactMarkdown from 'react-markdown';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import raw from 'raw.macro';

const App: React.FC = () => {
  return <Container>
    <Row>
      <Button>Bootstrap Button</Button>
    </Row>
    <ReactMarkdown source={raw('./articles/test-article.md')} />
  </Container>;
}

export default App;
