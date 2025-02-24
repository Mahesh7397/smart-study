import { useNavigate } from 'react-router-dom'
import Constant from '../assets/Constant'

const StudyResources = () => {
    const navigate=useNavigate()
    return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="resource">
                    <h2 className="text-3xl font-bold text-center mb-12">Study Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Constant.resourceTypes.map((resource) => (
                            <button
                                key={resource.id}
                                onClick={() => navigate(`/resources/${resource.id}`)}
                                className="p-6 rounded-xl border-2 bg-white border-gray-100 hover:border-gray-200 transition-all duration-300"
                            >
                                <div className={`${resource.textColor} mb-4`}>
                                    {resource.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                                <p className="text-gray-600 text-sm">{resource.description}</p>
                            </button>
                        ))}
                    </div>
                </div>
    
  )
}

export default StudyResources