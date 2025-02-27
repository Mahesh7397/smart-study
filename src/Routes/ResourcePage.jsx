import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react'


const dummyResources = {
  handbook: [
    { id: '1', title: 'Student Handbook 2024', subject: 'General', updatedAt: '1 month ago', link: 'https://drive.google.com/file/d/1Jc4BViTuF6bPfaW4v95Vual6hRIdvyWj/view?usp=drive_link' },
    { id: '2', title: 'Laboratory Safety Guidelines', subject: 'General', updatedAt: '2 months ago', link: '#' },
    { id: '3', title: 'Project Submission Guidelines', subject: 'General', updatedAt: '3 months ago', link: '#' },
  ],
  grading: [
    { id: '1', title: 'Grading Policy 2024', subject: 'General', updatedAt: '1 month ago', link: 'https://drive.google.com/file/d/1BwoFmH9_ZstLwsRl45DFc1wvFrMUllq9/view?usp=sharing' },
    { id: '2', title: 'Assessment Criteria', subject: 'General', updatedAt: '2 months ago', link: '#' },
    { id: '3', title: 'Grade Distribution Guidelines', subject: 'General', updatedAt: '3 months ago', link: '#' },
  ],
};

const resourceTitles = {
  handbook: 'Handbooks',
  grading: 'Grading Documents',
};

export default function ResourcePage() {
  let isLoading=false
  const { type } = useParams();
  const [resources, setresources] = useState([]);
  const [title, settitle] = useState("");
  const [key, setkey] = useState([])
  const [search, setsearch] = useState()

  const getQuestionpaper = async () => {
    const requestOption = {
      method: "POST",
      heaaders: { "content-type": "application/json" },
      body: JSON.stringify(search)
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_LINK}/api/resource`, requestOption)
      const data = await response.json()
      if (!response.ok) throw new Error(data.error.messgae || "");
      const apiresponcetext = data
      setresources(apiresponcetext);
      isLoading(false);
      return apiresponcetext
    } catch (error) {
      isLoading(false);
      console.log(error)
    }
  }

  const getNotes = async () => {
    const requestOption = {
      method: "POST",
      heaaders: { "content-type": "application/json" },
      body: JSON.stringify(search)
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_LINK}/api/resource/notes/result`, requestOption)
      const data = await response.json()
      if (!response.ok) throw new Error(data.error.messgae || "");
      const apiresponcetext = data
      setresources(apiresponcetext);

      isLoading(false);
      return apiresponcetext
    } catch (error) {
      isLoading(false);
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
      isLoading(false);
      return apiresponcetext
    } catch (error) {
      isLoading(false);
      console.log(error)
    }
  }

  const getNoteskey = async () => {
    const requestOption = {
      method: "GET",
      heaaders: { "content-type": "application/json" }
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_LINK}/api/resource/notes/key/${search}`, requestOption)
      const data = await response.json()
      if (!response.ok) throw new Error(data.error.messgae || "");
      const apiresponcetext = data
      setkey(apiresponcetext);
      isLoading(false);
      return apiresponcetext
    } catch (error) {
      isLoading(false);
      console.log(error)
    }
  }

  if (type === "Questionpaper") {
    settitle("Question Paper")

  } else if (type === "notes") {
    settitle("Notes")

  }
   else {
    setresources(type !== "all" && type ? dummyResources[type] : [])
    settitle(type !== "all" && type ? resourceTitles[type] : '')
  }

  const handleSubmit=()=>{
    if (type === "Questionpaper") {
      getQuestionpaper()

    } else if (type === "notes") {
      getNotes()

    }
  }

  useEffect(() => {
    if (type === "Questionpaper") {
      ()=>getQuestionpaperkey()

    } else if (type === "notes") {
      ()=>getNoteskey()
    } 
  }, [search])
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          </div>
        </div>

        {/* Search and Filter */}
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
              <div className='grid gap-4'>{key.length?key.map((da,i)=>(<div key={i} className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200'><p>{da.key}</p></div>)):null}</div>
              
            </div>
            <button onClick={()=>handleSubmit} disabled={search?.trim() || search?.key.trim()?false:true} className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              Search
            </button>
            <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option value="">All Subjects</option>
              <option value="computer_science">Computer Science</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
            </select>
            <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option value="">Sort by</option>
              <option value="recent">Most Recent</option>
              <option value="name">Name</option>
              <option value="subject">Subject</option>
            </select>
          </div>
        </div>

        {/* Resources Grid */}
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
      </div>
      );
}