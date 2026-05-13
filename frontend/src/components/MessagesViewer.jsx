import React, { useState, useEffect } from 'react';

const MessagesViewer = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. FETCH MESSAGES (Now Bulletproof)
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/messages');
        const data = await response.json();
        
        console.log("🔍 RADAR DETECTED THIS FROM BACKEND:", data);

        // BULLETPROOF CHECKER: 
        // Checks every possible way your backend might be sending the data
        if (Array.isArray(data)) {
          setMessages(data); // It's a normal list!
        } else if (data && data.messages && Array.isArray(data.messages)) {
          setMessages(data.messages); // It was wrapped in a "messages" object!
        } else if (data && data.data && Array.isArray(data.data)) {
          setMessages(data.data); // It was wrapped in a "data" object!
        } else {
          setMessages([]); // If all else fails, don't crash, just show empty.
        }

      } catch (error) {
        console.error("Failed to fetch messages:", error);
        setMessages([]); 
      } finally {
        setLoading(false);
      }
    };
    
    fetchMessages();
  }, []);

  if (loading) return <p className="text-gray-500 font-medium">Loading messages...</p>;

  // 2. RENDER THE INBOX
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 font-display text-gray-900">Inbox</h2>
      
      {messages.length === 0 ? (
        <p className="text-gray-500 bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
          No new messages. (If you sent one, check the browser console!)
        </p>
      ) : (
        <div className="grid gap-4">
          {messages.map((msg) => (
            <div key={msg._id || Math.random()} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{msg.name || "Unknown Sender"}</h3>
                  <p className="text-xs text-muted-foreground font-medium">
                    {msg.email || "No email"} | {msg.phone || 'No phone'}
                  </p>
                </div>
                <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded">
                  {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : "Just now"}
                </span>
              </div>
              <p className="text-sm mt-3 text-gray-700 bg-gray-50 p-3 rounded border border-gray-100 whitespace-pre-wrap">
                {msg.message || "No message content."}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagesViewer;