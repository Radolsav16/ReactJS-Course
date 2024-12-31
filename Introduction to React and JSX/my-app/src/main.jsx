import React, { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App , WelocmeMesage} from './App.jsx'

React.createElement('a',{className:"red"});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WelocmeMesage/>
    <App />

  </StrictMode>,
)
