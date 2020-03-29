import React from 'react';

import ConversationApp from './components/pages/ConversationApp';
import Navbar from './components/layout/Navbar';
import AppLayout from './components/layout/AppLayout';

const App = () => {
  return (
    <AppLayout>
      <header>
        <Navbar />
      </header>
      <main>
        <ConversationApp />
      </main>
    </AppLayout>
  );
};

export default App;
