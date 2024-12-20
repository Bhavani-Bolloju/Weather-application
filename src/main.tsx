import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { Provider } from 'react-redux'

import { store } from '@/store/store.ts'
import App from './app.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
         <div>Hey this is new to me</div>
      </Provider>
   </React.StrictMode>,
)
