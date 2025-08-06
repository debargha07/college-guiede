import React, { useState, useEffect } from 'react';

const ResourceViewer = ({ subject }) => {
  const [resources, setResources] = useState({ videos: [], notes: [] });
  const [activeTab, setActiveTab] = useState('videos');

  useEffect(() => {
    // Mock resources - replace with API call
    const mockResources = {
      videos: [
        {
          id: 1,
          title: `${subject.name} - Complete Course`,
          url: "https://www.youtube.com/watch?v=example1",
          thumbnail: "https://img.youtube.com/vi/example1/maxresdefault.jpg",
          duration: "2:30:45"
        },
        {
          id: 2,
          title: `${subject.name} - Practice Problems`,
          url: "https://www.youtube.com/watch?v=example2",
          thumbnail: "https://img.youtube.com/vi/example2/maxresdefault.jpg",
          duration: "1:45:20"
        }
      ],
      notes: [
        {
          id: 1,
          title: `${subject.name} - Complete Notes`,
          type: "PDF",
          size: "2.5 MB",
          downloadUrl: "#"
        },
        {
          id: 2,
          title: `${subject.name} - Quick Reference`,
          type: "PDF",
          size: "1.2 MB",
          downloadUrl: "#"
        }
      ]
    };
    setResources(mockResources);
  }, [subject]);

  return (
    <div className="resource-viewer">
      <h3>Resources for {subject.name}</h3>
      
      <div className="tab-selector">
        <button 
          className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          📹 Videos ({resources.videos.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`}
          onClick={() => setActiveTab('notes')}
        >
          📄 Notes ({resources.notes.length})
        </button>
      </div>

      <div className="resource-content">
        {activeTab === 'videos' && (
          <div className="videos-list">
            {resources.videos.map(video => (
              <div key={video.id} className="video-item">
                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                <div className="video-info">
                  <h4>{video.title}</h4>
                  <span className="video-duration">{video.duration}</span>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="watch-btn">
                    Watch Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="notes-list">
            {resources.notes.map(note => (
              <div key={note.id} className="note-item">
                <div className="note-icon">📄</div>
                <div className="note-info">
                  <h4>{note.title}</h4>
                  <span className="note-details">{note.type} • {note.size}</span>
                </div>
                <a href={note.downloadUrl} className="download-btn">
                  Download
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceViewer;

