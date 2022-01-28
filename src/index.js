import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './context/AuthContext';
import UserProvider from './context/UserContext';
import { SkeletonTheme } from 'react-loading-skeleton'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <SkeletonTheme baseColor="#423a2d" highlightColor="#544630" duration={2}>
          <App />
        </SkeletonTheme>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
