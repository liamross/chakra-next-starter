import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';
import type {AppProps} from 'next/app';
import React from 'react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body, #__next': {
        height: 'full',
      },
    },
  },
  textStyles: {
    secondary: {
      opacity: 0.65,
    },
  },
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
