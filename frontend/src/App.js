import React from 'react';

import { Provider } from 'react-redux';

import store from './store';

import AppLayout from './components/layout/AppLayout';
import ConversationApp from './components/pages/ConversationApp';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <AppLayout>
        <header>
          <Navbar />
        </header>
        <main>
          <ConversationApp />
        </main>
      </AppLayout>
    </Provider>
  );
};

export default App;
