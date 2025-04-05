import React, { Suspense,lazy } from 'react'
import './App.css'
import UserProvider from './providers/User';
import Login from './components/Login';
import {ErrorBoundary} from 'react-error-boundary'

const Home = lazy(() => import('./components/Home'));

function App() {

  return (
    <>
    <UserProvider>
      <Suspense fallback={<div>Loading ...</div>}>
        <Home />
        <ErrorBoundary fallback={<div>Somethink went wrong</div>}>
          <Login />
        </ErrorBoundary>
        
      </Suspense>
      </UserProvider>
    </>
  )
}

export default App
