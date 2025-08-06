import React, { useState, useEffect } from 'react';
import CollegeCard from '../components/CollegeCard';

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredColleges, setFilteredColleges] = useState([]);

  // Mock data - replace with API call
  useEffect(() => {
    const mockColleges = [
      {
        id: 1,
        name: "Indian Institute of Technology Delhi",
        location: "New Delhi",
        type: "Engineering",
        courses: [
          { id: 1, name: "Computer Science Engineering", duration: "4 years" },
          { id: 2, name: "Mechanical Engineering", duration: "4 years" }
        ]
      },
      {
        id: 2,
        name: "University of Delhi",
        location: "Delhi",
        type: "Multi-disciplinary",
        courses: [
          { id: 3, name: "Bachelor of Commerce", duration: "3 years" },
          { id: 4, name: "Bachelor of Arts", duration: "3 years" }
        ]
      },
      {
        id: 3,
        name: "All India Institute of Medical Sciences",
        location: "New Delhi",
        type: "Medical",
        courses: [
          { id: 5, name: "MBBS", duration: "5.5 years" },
          { id: 6, name: "BDS", duration: "5 years" }
        ]
      }
    ];
    setColleges(mockColleges);
    setFilteredColleges(mockColleges);
  }, []);

  useEffect(() => {
    const filtered = colleges.filter(college =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredColleges(filtered);
  }, [searchTerm, colleges]);

  return (
    <div className="colleges-page">
      <div className="container">
        <h1>Popular Colleges</h1>
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search colleges by name or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="colleges-grid">
          {filteredColleges.map(college => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colleges;
