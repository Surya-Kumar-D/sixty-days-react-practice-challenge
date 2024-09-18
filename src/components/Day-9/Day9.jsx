import { useState } from "react";

const faqData = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.",
  },
  {
    question: "How does React work?",
    answer:
      "React creates a virtual DOM in memory. Instead of manipulating the browser’s DOM directly, React creates a virtual DOM and then attempts to sync it with the real DOM using its reconciliation algorithm.",
  },
  {
    question: "What are props in React?",
    answer:
      "Props (short for properties) are a mechanism for passing data from a parent component to a child component.",
  },
  {
    question: "What is state in React?",
    answer:
      "State is a built-in object that allows components to maintain and update their own data. It is managed internally and can trigger a re-render when changed.",
  },
  {
    question: "How do I handle forms in React?",
    answer:
      "In React, forms can be handled using controlled components, where form input elements are controlled by React state, or uncontrolled components where refs are used.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. It is then transpiled into standard JavaScript.",
  },
  {
    question: "What are hooks in React?",
    answer:
      "Hooks are functions that let you use state and other React features in functional components. Common hooks include `useState`, `useEffect`, and `useContext`.",
  },
  {
    question: "How can I improve performance in a React app?",
    answer:
      "To improve performance, you can use techniques such as memoization (React.memo, useMemo), lazy loading, code splitting, and using shouldComponentUpdate or React.PureComponent.",
  },
];

function Day9() {
  const [active, setActive] = useState(null);
  function handleClick(i) {
    setActive(i === active ? null : i);
  }

  return (
    <div className="accordion">
      <div className="accordion__grid">
        {faqData.map((item, i) => (
          <div onClick={() => handleClick(i)}>
            <div className="accordion__flex">
              <div className="accordion__question"> {item.question}</div>
              <div
                className={`accordion__plus ${i === active ? "active" : ""}`}
              >
                +
              </div>
            </div>
            {i === active && (
              <div
                className={`accordion__answer ${
                  i === active ? "accordion__visible" : ""
                }`}
              >
                {i === active ? item.answer : ""}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day9;
