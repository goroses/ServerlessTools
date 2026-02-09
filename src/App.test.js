// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Serverless title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Serverless/i);
    expect(titleElement).toBeInTheDocument();
});
