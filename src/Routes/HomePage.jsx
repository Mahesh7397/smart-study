import SearchBar from "../components/SearchBar";
import Features from "../components/Features";
import StudyResources from "../components/StudyResources";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Testimonils from "../components/Testimonils";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden min-h-screen">
               <Header/>
                {/* Search Bar */}
                <SearchBar/>
            </div>
            {/* Study Resources Section */}
            <StudyResources/>
            {/* Features Section */}
           <Features/>
            {/* Testimonials Section */}
            <Testimonils/>
            {/* Footer */}
           <Footer/>
        </div>
    )
}

export default HomePage