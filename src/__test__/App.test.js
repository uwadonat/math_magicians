import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

beforeEach(() => render(<App />));

test('renders the homepage on load', () => {
    const Element = screen.getByText(/Welcome on our Calculator/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders calculator when user click on calculator link', async () => {
    fireEvent.click(screen.getByText('Calculator'));
  
    await waitFor(() => {
      screen.getByText('Let\'s do some math!');
    });
  
    expect(screen.getByText('Let\'s do some math!')).toBeInTheDocument();
  });

  