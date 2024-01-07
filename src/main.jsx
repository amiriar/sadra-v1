import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider domain={domain} clientId={clientID} authorizationParams={{redirect_uri: window.location.origin}} >
        <App  />
    </Auth0Provider>
)
