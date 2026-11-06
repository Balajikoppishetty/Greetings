import React from 'react';

function App() {
  const hour = new Date().getHours();

  return (
    <main className="container">
      <h1>{hour < 12 ? 'Good Morning' : 'Good Evening'}</h1>
      <p>Current hour: {hour}</p>
    </main>
  );
}

export default App;
