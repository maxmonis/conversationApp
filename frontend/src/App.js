import React from 'react';

import ConversationApp from './components/pages/ConversationApp';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div style={{ height: '400px', width: '200px' }}>
      <header>
        <Navbar />
      </header>
      <main>
        <ConversationApp />
      </main>
    </div>
  );
};

export default App;
