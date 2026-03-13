import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import ECommerceIndex from './Components/EcomIndex.js'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')!).render(
    <CookiesProvider>
        <Provider store={store}>
            <ECommerceIndex />
        </Provider>
    </CookiesProvider>
)
