import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter> {/* 현재 브라우저의 주소를 감지할 수 있음 */}
    <App />
    </BrowserRouter>
)