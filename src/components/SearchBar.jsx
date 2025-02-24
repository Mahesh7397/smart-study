
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 -mt-8 relative z-10">
                <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for study materials, topics, or resources..."
                        className="flex-1 outline-none text-gray-700"
                    />
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                        Search
                    </button>
                </div>
            </div>
  )
}

export default SearchBar