

import { useState,useRef} from 'react';
import { Send, ArrowLeft, Bot, User, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PublicCommunity() {
  const [messages, setMessages] = useState([
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [type,settype]=useState('')
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    scrollToBottom()
    setInput('');
    setIsLoading(true);

    const history = { "Message":input,"Type":type }
    
    // Simulate AI response
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( history )
    }
    try {
      const response = await fetch(import.meta.env.VITE_API_LINK, requestOption)
      const data= await response.json()
      if (!response.ok) throw new Error(data.error.messgae || "");
      const apiresponcetext=data
      setMessages(prev => [...prev, apiresponcetext]);
      scrollToBottom()
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
       console.log(error)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col ">
      {/* Header */}
      <div className="bg-white border-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Community</h1>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 shadow-xl">
        <div className="bg-white rounded-xl shadow-sm h-[calc(100vh-8rem)] flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${message.Type === 'Question' ? 'flex-row-reverse' : ''
                  }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${message.Type === 'Question'
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-blue-100 text-blue-600'
                    }`}
                >
                  {message.Type === 'Question' ? (
                    <User className="w-5 h-5" />
                  ) : (
                    <Bot className="w-5 h-5" />
                  )}
                </div>
                <div
                  className={`flex-1 rounded-2xl px-4 py-2 ${message.Type === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                    }`}
                >
                  <p className="text-sm">{message.Message}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="flex-1 rounded-2xl px-4 py-2 bg-gray-100">
                  <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
                </div>
              </div>
            )}
            {<div ref={messagesEndRef} />}
          </div>

          {/* Input */}
          <div className="border-non p-4">
            <form onSubmit={handleSubmit} className="flex gap-4">
            <select onChange={(e)=>settype(e.target.value)} className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option value="Answer">Answer</option>
              <option value="Question">Question</option>
            </select>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Your Question or give answer"
                className="flex-1 rounded-lg border border-gray-200 px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                disabled={!input.trim() && !type.trim()|| isLoading}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}