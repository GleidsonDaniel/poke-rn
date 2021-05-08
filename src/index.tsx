import 'react-native-gesture-handler';

import React from 'react';
import Routes from './routes';
import {SWRConfig} from 'swr';
import {fetcher} from './core/helpers/swrFetcher';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './styles/theme';

export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher,
        }}>
        <Routes />
      </SWRConfig>
    </ThemeProvider>
  );
}
