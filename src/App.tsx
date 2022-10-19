import NotistackProvider from 'components/NotistackProvider';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import ThemePrimaryColor from './components/ThemePrimaryColor';
import '@fortawesome/fontawesome-free/css/all.min.css';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <RtlLayout>
          <NotistackProvider>
            {/* <Settings /> */}
            <ScrollToTop />
            <Router />
          </NotistackProvider>
        </RtlLayout>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
