import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Movies/i);
  expect(linkElement).toBeInTheDocument();
});


test('add movie', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Title/i), {
    target: { value: 'test' },
  })
  fireEvent.change(screen.getByLabelText(/Cover/i), {
    target: { value: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
  })
  fireEvent.change(screen.getByLabelText(/Genre/i), {
    target: { value: 'this is genre' },
  })
  fireEvent.change(screen.getByLabelText(/IMDB/i), {
    target: { value: 1 },
  })
  fireEvent.click(screen.getByText(/Add Movie/i));
  const movie_title = screen.getByText(/test/i);
  expect(movie_title).toBeInTheDocument();
  expect(screen.getByText(/this is genre/i)).toBeInTheDocument();
  expect(screen.getByText(/1/i)).toBeInTheDocument();

  expect(screen.getByLabelText(/Title/i).innerHTML).toBe('');

})  