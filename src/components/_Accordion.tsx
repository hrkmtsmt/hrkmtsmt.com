import React, { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export const Accordion = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={"c-accordion"}>
      <button className={"c-accordion-question"} onClick={() => setIsActive(!isActive)}>
        {props.question}
      </button>
      <div className={"c-accordion-answer"} aria-expanded={isActive}>
        {props.answer}
      </div>
    </div>
  );
};
