import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';
import Sidebar from './components/navbar';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Open/Close Sidebar</button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Sidebar />
      </Drawer>
    </div>
  );
}
export default App;