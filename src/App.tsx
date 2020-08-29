import React from 'react';
import ReactMarkdown from 'react-markdown';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const input = '# Test Header\n\n ## And a sub-header \n\n And a test paragraph\n\n And another paragraph';

const App: React.FC = () => 
  <Container>
    <Row>
      <Button>Bootstrap Button</Button>
    </Row>
    <Row>
      <ReactMarkdown source={input} />
    </Row>
  </Container>;

export default App;
