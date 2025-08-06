import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <div className="college-card">
      <div className="college-header">
        <h3>{college.name}</h3>
        <span className="college-type">{college.type}</span>
      </div>
      <p className="college-location">📍 {college.location}</p>
      
      <button 
        className="toggle-courses-btn"
        onClick={() => setShowCourses(!showCourses)}
      >
        {showCourses ? 'Hide Courses' : 'Show Courses'}
      </button>

      {showCourses && (
        <div className="courses-list">
          <h4>Available Courses:</h4>
          {college.courses.map(course => (
            <div key={course.id} className="course-item">
              <Link to={`/course/${course.id}`} className="course-link">
                <span className="course-name">{course.name}</span>
                <span className="course-duration">{course.duration}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollegeCard;
