import React, { useState, useMemo, useCallback } from "react";

import classes from "./QuestionSelectorWindow.module.css";

import QuestionSelector from "./QuestionSelector";
import QuestionPanel from "../Question panel/QuestionPanel";
import DotContainer from "./dotContainer";
import PreChatScreen from "../SignUpForm/PreChatScreen";
import TypeInput from "./TypeInInput";

const QuestionSelectorWindow = () => {
  const [index, setIndex] = useState(1);
  const [done, setDone] = useState(false);

  const sucess = useCallback(function () {
    setDone(true);
  }, []);

  const selectorQuestions = useMemo(() => {
    return [
      {
        question: "I am a/an",
        Id: "q1",
        options: [
          "student",
          "educator",
          "medical professional",
          "entrepreneur",
          "Goverment Servant",
          "Civil Servant",
          "Law enforcement officer",
          "artist",
          "designer",
          "management",
          "hotel management",
          "legal professional",
          "finance professional",
          "defence personale",
          "social worker",
          "fashion and styling",
          "software professional",
          "engineering",
          "merchant navy",
          "other",
        ],
        last: false,
      },
    ];
  }, []);

  const typeQuestion = useMemo(() => {
    return [
      {
        question: "I live in",
        options: ["option1", "option2", "option3", "option4", "option5"],
        last: true,
        Id: "q2",
      },
    ];
  }, []);

  const chipQuestions = useMemo(() => {
    return [
      {
        question: "Skills that I want to learn",
        Id: "q4",
        options: [
          "content writing",
          "Public speaking",
          "Web development",
          "UI/UX design",
          "Photography",
          "singing",
          "Digital marketing",
          "Entrepreneurship",
          "Data Science",
          "Banking",
          "Korean language",
          "Makeup",
          "Investment",
        ],
        min: 1,
        max: 5,
        last: true,
      },
      {
        question: "Skills that I am good at",
        options: [
          "content writing",
          "Public speaking",
          "Web development",
          "UI/UX design",
          "Photography",
          "singing",
          "Digital marketing",
          "Entrepreneurship",
          "Data Science",
          "Banking",
          "Korean language",
          "Makeup",
          "Investment",
        ],
        Id: "q5",
        min: 1,
        max: 5,
        last: false,
      },
    ];
  }, []);

  const slideHandler = useCallback(function () {
    setIndex((prevVal) => prevVal + 1);
  }, []);

  if (done) {
    return <PreChatScreen />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.left}></div>
      <div className={classes.right}></div>
      <div className={classes.questionBox}>
        <div className={classes.quespanel}>
          {chipQuestions.map((question) => {
            return (
              <QuestionPanel
                question={question.question}
                options={question.options}
                min={question.min}
                max={question.max}
                key={question.Id}
                id={question.Id}
                last={question.last}
                onClick={slideHandler}
                sucess={sucess}
              />
            );
          })}
          {selectorQuestions.map((question) => (
            <QuestionSelector
              question={question.question}
              options={question.options}
              key={question.Id}
              id={question.Id}
              last={question.last}
              onClick={slideHandler}
              sucess={sucess}
            />
          ))}
          {typeQuestion.map((question) => {
            return (
              <TypeInput
                question={question.question}
                key={question.Id}
                id={question.Id}
                last={question.last}
                onClick={slideHandler}
                sucess={sucess}
              />
            );
          })}
        </div>
        <div className={classes.dots}>
          <DotContainer index={index} />
        </div>
      </div>
      <p className={classes.doions}>Powered by Doions Pvt Ltd</p>
    </div>
  );
};

export default QuestionSelectorWindow;
