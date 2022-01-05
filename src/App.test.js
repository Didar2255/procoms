import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Footer from './Pages/sharedPages/Home/Footer/Footer';
import Reviews from './Pages/sharedPages/Home/Reviews/Reviews';
import { store } from './redux/store';

test('check whether footer has the expected text or not', () => {
  render(<Footer />);
  const linkElement = screen.getByText(
    'Service Guarantee After bye Any Product'
  );
  expect(linkElement).toBeInTheDocument();
});

test('loading text is shown while API request is in progress in review', async () => {
  render(
    <Provider store={store}>
      <Reviews />
    </Provider>
  );
  const loading = await screen.findByText('loading');

  expect(loading).toBeInTheDocument();
});
