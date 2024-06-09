import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";

const FAQ = ({ questions, onAnswersChange }) => {
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const contentData = questions.map((question) => ({
      questionId: question._id,
      answer: answers[question._id] || "", 
    }));
    
    
    onAnswersChange(contentData);
    
   
    console.log(contentData); 
  }, [answers, questions, onAnswersChange]);

  // Function to update answers dynamically
  const handleAnswerChange = (questionId, newAnswer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]:newAnswer
    }));
  };

  return (
    <div className="p-4 bg-gray-200 rounded-lg mx-auto w-3/4">
      {questions?.map((question, index) => (
        <Accordion
          key={question._id}
          title={question.questionText}
          questionId={question._id}
          answer={answers[question._id] || ""}
          onAnswerChange={(newAnswer) => handleAnswerChange(question._id, newAnswer)}
        />
      ))}
    </div>
  );
};

export default FAQ;
