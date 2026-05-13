import React, { useState, useEffect } from 'react';

const MessagesViewer = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. FETCH MESSAGES
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/messages');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  if (loading) return <p className="text-gray-500">Loading messages...</p>;

  // 2. RENDER THE INBOX
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4 font-display">Inbox</h2>
      {messages.length === 0 ? (
        <p className="text-gray-500 bg-gray-50 p-6 rounded-lg text-center border border-gray-100">No new messages.</p>
      ) : (
        <div className="grid gap-4">
          {messages.map((msg) => (
            <div key={msg._id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">{msg.name}</h3>
                  <p className="text-xs text-muted-foreground">{msg.email} | {msg.phone || 'No phone'}</p>
                </div>
                <span className="text-xs text-gray-400">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm mt-3 text-gray-700 bg-gray-50 p-3 rounded">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagesViewer;