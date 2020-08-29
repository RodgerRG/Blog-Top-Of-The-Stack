import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

test('markdown renders', () => {
	const { getByText } = render(<ReactMarkdown source={raw('./test/test-markdown-article.md')}/>);
	const title = getByText(/Title/i);
	expect(title).toBeInTheDocument();
});
