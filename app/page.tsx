"use client";

import Image from "next/image";
import { questionList } from "@/constants/question";
import { useState } from "react";
import Question from "@/components/question";
export default function Home() {
  const totalQuestion = questionList.length;
  const [currQuestionIndex, SetCurrentQuestionIndex] = useState(0);
  const [ansIsSelect, setAnsIsSelect] = useState<{
    ansIsVisble: boolean;
    ansIs: string;
    selectedAns: string;
    selectedKey: string;
  }>({
    ansIsVisble: false,
    ansIs: "",
    selectedAns: "",
    selectedKey: "",
  });

  const verifyOption = (key: string, questionObj: any) => {
    console.log(key, "key");
    setAnsIsSelect((preAnsIsSelect) => ({
      ...preAnsIsSelect,
      ansIsVisble: !preAnsIsSelect.ansIsVisble,
      ansIs: questionObj["answer"],
      selectedAns: questionObj["options"][key],
      selectedKey: key,
    }));
  };
  const handleQuestionIndex = () => {
    setAnsIsSelect((preAnsIsSelect) => ({
      ...preAnsIsSelect,
      ansIsVisble: false,
      ansIs: "",
      selectedKey: "",
      selectedAns: "",
    }));
    SetCurrentQuestionIndex(currQuestionIndex + 1);
  };

  return (
    <main className="text-current h-screen grid place-content-center bg-[url('https://tailwindui.com/build/assets/beams-components-24fbfee2.png')]">
      <div className="font-bold flex justify-center text-black text-[26px]">
        Quiz Name
      </div>
       {currQuestionIndex  < totalQuestion ? <div>
        <div className="flex justify-center font-light text-slate-500">
          {currQuestionIndex + 1} / {totalQuestion}
        </div>
        <Question
          questionObj={questionList[currQuestionIndex]}
          ansIsSelect={ansIsSelect}
          verifyOption={verifyOption}
        />

        {totalQuestion !== currQuestionIndex && (
          <button
            onClick={() =>
              ansIsSelect.ansIsVisble == true ? handleQuestionIndex() : ""
            }
            className={`${
              ansIsSelect.ansIsVisble == true ? "hover:bg-gray-500 bg-gray-700 " : "bg-gray-500"
            } text-white font-bold py-2 px-4 rounded mt-[10px] disable`}
          >
            next question
          </button>
        )}
      </div>:'congrationlation your quiz successfully end 🥳'}
    </main>
  );
}
