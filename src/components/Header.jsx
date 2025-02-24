import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate=useNavigate()
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Your Smart Study Companion for Success!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
            Enhance your learning journey with AI-powered tools and comprehensive study resources
        </p>
        <div className="flex justify-center gap-4">
            <button
                onClick={() => navigate('/ai-tutor')}
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition flex items-center gap-2"
            >
                Try AI Tutor <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#resource" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition">
                Explore Resources
            </a>
        </div>
    </div>
</div>
  )
}

export default Header