import { Article } from '../types';

import raw from 'raw.macro';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const article: Article = {
  route: 'test-article',
  author: 'Bob Vance',
  dateWritten: new Date('11-11-2020'),
  //image: new URL(), //new URL('./hammer.png'),
  summary: 'There once was an old man who walked out of a window',
  title: 'Not plagiarised at all',
  content: <ReactMarkdown source={raw('./test-article.md')} />
} as any as Article

export default article;