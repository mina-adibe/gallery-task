import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
