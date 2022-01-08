import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export default function Layout({ children }) {
    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}