// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PeelZiz title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PeelZiz/i);
    expect(titleElement).toBeInTheDocument();
});
