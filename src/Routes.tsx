import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Catalog from './pages/Catalog'
import Product from './pages/Product'


export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/products" element={<Product />} />
            </Routes>
        </Router>
    )
}