import {StrictMode} from 'react'
import {Provider} from 'react-redux'
import {createRoot} from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import {MantineProvider} from "@mantine/core";
import {store} from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
        <MantineProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MantineProvider>
        </Provider>
    </StrictMode>,
)
