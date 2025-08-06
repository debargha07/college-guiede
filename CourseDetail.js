import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubjectList from '../components/SubjectList';
import ResourceViewer from '../components/ResourceViewer';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    // Mock course data - replace with API call
    const mockCourse = {
      id: courseId,
      name: "Computer Science Engineering",
      college: "IIT Delhi",
      duration: "4 years",
      semesters: {
        1: [
          { id: 1, name: "Mathematics I", code: "MA101" },
          { id: 2, name: "Physics", code: "PH101" },
          { id: 3, name: "Programming Fundamentals", code: "CS101" }
        ],
        2: [
          { id: 4, name: "Mathematics II", code: "MA102" },
          { id: 5, name: "Data Structures", code: "CS102" },
          { id: 6, name: "Digital Logic", code: "CS103" }
        ],
        3: [
          { id: 7, name: "Database Systems", code: "CS201" },
          { id: 8, name: "Computer Networks", code: "CS202" },
          { id: 9, name: "Operating Systems", code: "CS203" }
        ]
      }
    };
    setCourse(mockCourse);
  }, [courseId]);

  if (!course) return <div className="loading">Loading...</div>;

  return (
    <div className="course-detail">
      <div className="container">
        <div className="course-header">
          <h1>{course.name}</h1>
          <p>{course.college} • {course.duration}</p>
        </div>

        <div className="course-content">
          <div className="semester-selector">
            <h3>Select Semester:</h3>
            <div className="semester-buttons">
              {Object.keys(course.semesters).map(sem => (
                <button
                  key={sem}
                  className={`semester-btn ${selectedSemester == sem ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedSemester(parseInt(sem));
                    setSelectedSubject(null);
                  }}
                >
                  Semester {sem}
                </button>
              ))}
            </div>
          </div>

          <div className="content-area">
            <div className="subjects-panel">
              <SubjectList 
                subjects={course.semesters[selectedSemester]}
                onSubjectSelect={setSelectedSubject}
                selectedSubject={selectedSubject}
              />
            </div>
            
            <div className="resources-panel">
              {selectedSubject && (
                <ResourceViewer subject={selectedSubject} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
