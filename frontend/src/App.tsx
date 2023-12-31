import React from 'react';
import {Provider} from 'react-redux';
import {store} from './application/redux/store';
import Navigation from './application/navigations/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
    //<Navigation />
  );
}
