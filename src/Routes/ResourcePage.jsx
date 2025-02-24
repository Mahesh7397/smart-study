import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Search } from 'lucide-react';


const dummyResources = {
  question_paper: [
    { id: '1', title: 'Data Structures Final Exam 2024', subject: 'Computer Science', updatedAt: '2 days ago', link: '#' },
    { id: '2', title: 'Algorithm Analysis Mid-term', subject: 'Computer Science', updatedAt: '1 week ago', link: '#' },
    { id: '3', title: 'Database Systems Quiz', subject: 'Computer Science', updatedAt: '2 weeks ago', link: '#' },
  ],
  notes: [
    { id: '1', title: 'Complete Java Programming Notes', subject: 'Computer Science', updatedAt: '1 day ago', link: '#' },
    { id: '2', title: 'Web Development Fundamentals', subject: 'Computer Science', updatedAt: '3 days ago', link: '#' },
    { id: '3', title: 'Machine Learning Basics', subject: 'Computer Science', updatedAt: '1 week ago', link: '#' },
  ],
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
  question_paper: 'Past Question Papers',
  notes: 'Study Notes',
  handbook: 'Handbooks',
  grading: 'Grading Documents',
};

export default function ResourcePage() {
  const { type } = useParams();
  const resources = type ? dummyResources[type] : [];
  const title = type ? resourceTitles[type] : '';

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
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
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
          {resources.map((resource) => (
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
                    <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                    <p className="text-sm text-gray-500">{resource.subject} • Updated {resource.updatedAt}</p>
                  </div>
                </div>
                <a href={resource.link} className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200">
                  View Document
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}