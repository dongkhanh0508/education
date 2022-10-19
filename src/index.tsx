// scroll bar
import 'simplebar/src/simplebar.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './utils/highlight';
import 'react-quill/dist/quill.snow.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// contexts
import { I18nextProvider } from 'react-i18next';
import i18n from 'translation/i18n';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { SettingsProvider } from './contexts/SettingsContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
//
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import 'react-toastify/dist/ReactToastify.min.css';
import './index.css';
import keycloak from './Keyloack';

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <SettingsProvider>
        <CollapseDrawerProvider>
          <ReactKeycloakProvider
            authClient={keycloak}
            onTokens={(token) => {
              console.log(token);
            }}
            initOptions={{
              onLoad: 'login-required',
            }}
          >
            <Provider store={store}>
              <BrowserRouter>
                <I18nextProvider i18n={i18n}>
                  <App />
                  <ToastContainer />
                </I18nextProvider>
              </BrowserRouter>
            </Provider>
          </ReactKeycloakProvider>
        </CollapseDrawerProvider>
      </SettingsProvider>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
