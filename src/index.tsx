import 'react-native-gesture-handler';

import React from 'react';
import Routes from './routes';
import {SWRConfig} from 'swr';
import {fetcher} from './core/helpers/swrFetcher';

export default function index() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher,
      }}>
      <Routes />
    </SWRConfig>
  );
}
