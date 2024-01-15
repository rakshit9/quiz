import { useEffect, useState } from "react";

const Question = ({ questionObj, ansIsSelect, verifyOption }: any) => {
  // useEffect(() => {
  //   setAnsIsSelect((preAnsIsSelect) => ({
  //     ...preAnsIsSelect,
  //     ansIsVisble: false,
  //     ansIs: "",
  //     selectedAns: "",
  //   }));
  // }, [questionObj]);

  // const [ansIsSelect, setAnsIsSelect] = useState<{
  //   ansIsVisble: boolean;
  //   ansIs: string;
  //   selectedAns: string;
  //   selectedKey: string;
  // }>({
  //   ansIsVisble: false,
  //   ansIs: "",
  //   selectedAns: "",
  //   selectedKey: "",
  // });
  // const verifyOption = (key: string) => {
  //   console.log(key,"key")
  //   setAnsIsSelect((preAnsIsSelect) => ({
  //     ...preAnsIsSelect,
  //     ansIsVisble: !preAnsIsSelect.ansIsVisble,
  //     ansIs: questionObj["answer"],
  //     selectedAns: questionObj["options"][key],
  //     selectedKey:key
  //   }));
  // };
console.log(ansIsSelect)
  return (
    <div>
      <div>
        <p className="text-semibold  text-slate-500 text-[20px]">
          {questionObj["question"]}
        </p>
      </div>
      <div className="list-none font-light text-slate-500 text-[14px]">
        {questionObj &&
          Object.keys(questionObj["options"]).map((key) => (
            <li onClick={() => verifyOption(key, questionObj)} key={key} className={
              `cursor-pointer
              ${ansIsSelect.ansIs.length != 0 && questionObj["answer"] == key ? 'underline  decoration-2 decoration-[#008000]' : ansIsSelect.selectedKey == key ? 'underline  decoration-2 decoration-[#ff0000]' : '' }
                `}>
              {key} {String.fromCharCode(41)} {questionObj["options"][key]}
            </li>
          ))}
      </div>
      {/* {ansIsSelect && ansIsSelect.ansIsVisble ? (
        <div>
          <div> Reason :- {questionObj["explanation"]}</div>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Question;
