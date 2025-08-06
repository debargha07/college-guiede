import React from 'react';

const SubjectList = ({ subjects, onSubjectSelect, selectedSubject }) => {
  return (
    <div className="subject-list">
      <h3>Subjects</h3>
      {subjects.map(subject => (
        <div 
          key={subject.id}
          className={`subject-item ${selectedSubject?.id === subject.id ? 'selected' : ''}`}
          onClick={() => onSubjectSelect(subject)}
        >
          <div className="subject-code">{subject.code}</div>
          <div className="subject-name">{subject.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SubjectList;
