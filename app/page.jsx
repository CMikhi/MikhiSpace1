'use client';

import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      
      <h2>Welcome to Next.js!</h2>

    </div>
  );
}

export default HomePage;