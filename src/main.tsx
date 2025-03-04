import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import "./main.scss"

// Add google roboto fonts.
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8888/';
createRoot(document.getElementById('root')!).render(
    <App/>
)
