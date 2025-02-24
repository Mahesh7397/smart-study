

import { useState,useRef} from 'react';
import { Send, ArrowLeft, Bot, User, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AiTutor() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your AI tutor. How can I help you with your studies today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };
  
    setMessages(prev => [...prev, userMessage]);
    scrollToBottom()
    setInput('');
    setIsLoading(true);

    const history = [{ parts: [{ "text":input }] }]

    // Simulate AI response
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history })
    }
    try {
      const response = await fetch(import.meta.env.VITE_CHAT_BOT_API_LINK, requestOption)
      const data= await response.json()
      if (!response.ok) throw new Error(data.error.messgae || "");
      const apiresponcetext=data.candidates[0].content.parts[0].text.replace("*"," ")
      console.log(apiresponcetext)
      const botMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: apiresponcetext,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      scrollToBottom()
      setIsLoading(false);
    } catch (error) {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "SomeThing  Wrong , Try again later",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
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
            <h1 className="text-2xl font-bold text-gray-900">AI Tutor</h1>
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
                className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''
                  }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user'
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-blue-100 text-blue-600'
                    }`}
                >
                  {message.type === 'user' ? (
                    <User className="w-5 h-5" />
                  ) : (
                    <Bot className="w-5 h-5" />
                  )}
                </div>
                <div
                  className={`flex-1 rounded-2xl px-4 py-2 ${message.type === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                    }`}
                >
                  <p className="text-sm">{message.content}</p>
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
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about your studies..."
                className="flex-1 rounded-lg border border-gray-200 px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
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