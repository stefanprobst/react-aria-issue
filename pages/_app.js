import { SSRProvider } from '@react-aria/ssr';

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
