import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from "./config/firebase";
import reportWebVitals from './reportWebVitals';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie'
import Footer from './Footer.js'

ReactDOM.render(
    <React.StrictMode>
      <AuthProvider>
      {
        /* We add this Auth Provider to give the app context of the user */
      }
        <CookiesProvider>
          <App />
            {/* <div className="w-100">
              <Footer />
            </div> */}
        </CookiesProvider>
      </AuthProvider>
      
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
