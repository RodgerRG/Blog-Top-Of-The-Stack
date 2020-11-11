import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Article as ArticleData } from '../types';

const Article: React.FC<{ article: ArticleData }> = ({ article }) => {
  return <Container>
    <Row>
      <Button>Bootstrap Button</Button>
    </Row>
    { article.content }
  </Container>;
}

export default Article;