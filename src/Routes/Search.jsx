import {  useEffect, useState } from "react"
import { Loader2 ,FileText, Search} from 'lucide-react'


const ASearch = () => {
    let isLoading=false
    const [resources, setresources] = useState([]);
    const [search, setsearch] = useState()
    const [key,setkey]=useState([])
 
    const getQuestionpaper = async () => {
        const requestOption = {
          method: "POST",
          heaaders: { "content-type": "application/json" },
          body: JSON.stringify(search)
        }
        try {
            isLoading=true
          const response = await fetch(`${import.meta.env.VITE_API_LINK}/api/resource/questionpaper/result`, requestOption)
          const data = await response.json()
          if (!response.ok) throw new Error(data.error.messgae || "");
          const apiresponcetext = data
          setresources(apiresponcetext);
          isLoading=false;
          console.log(apiresponcetext)
        } catch (error) {
          isLoading=false;
          console.log(error)
        }
      }

      const getQuestionpaperkey = async () => {
        const requestOption = {
          method: "GET",
          heaaders: { "content-type": "application/json" }
        }
        try {
          const response = await fetch(`${import.meta.env.VITE_API_LINK}/api/resource/questionpaper/key/${search}`, requestOption)
          const data = await response.json()
          if (!response.ok) throw new Error(data.error.messgae || "");
          const apiresponcetext = data
          setkey(apiresponcetext);
          isLoading=false;
          console.log(apiresponcetext)
        } catch (error) {
          isLoading=false;
          console.log(error)
        }
      }


      const handleSubmit=()=>{
         getQuestionpaper()
      }

      useEffect(()=>{
         getQuestionpaperkey()
      },[search,getQuestionpaperkey()])
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
       <div className="flex gap-4">
           <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={search?.key ? search.key : search}
                onChange={(e) => setsearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <button onClick={()=>handleSubmit()} className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              Search
            </button>
       </div>
       <div className="grid gap-4">
          {resources ? resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{resource.Sub_name}</h3>
                    <p className="text-sm text-gray-500">{resource.Sub_code} • Updated {resource.Question_Paper_Year?resource.Question_Paper_Year:resource.Notes_Year}</p>
                  </div>
                </div>
                <a href={resource.File_Url} className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200">
                  View Document
                </a>
              </div>
            </div>
          )) : isLoading ? <Loader2 className="w-5 h-5 animate-spin text-gray-500" /> : "Result Not Found"}
          </div>
    </div>
  )
}

export default ASearch