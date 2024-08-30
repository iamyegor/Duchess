// import classNames from "classnames";
// import { ENTERED, ENTERING, EXITED, EXITING } from "react-transition-group/Transition";
// import React from "react";
//
// interface AccordionAnswerProps {
//     state: string;
//     answer: React.ReactNode;
// }
//
// export default function AccordionAnswer({ state, answer }: AccordionAnswerProps) {
//     const defaultClassName =
//         "px-5 py-4 bg-white border-none text-gray-700 transition-all duration-300 ease-in-out relative rounded-b-xl flex flex-col pt-0";
//
//     const className = classNames(defaultClassName, {
//         "-translate-y-full opacity-0": [EXITING, EXITED].includes(state),
//         "translate-x-0": [ENTERING, ENTERED].includes(state),
//         "-z-10": [ENTERING, EXITING].includes(state),
//     });
//
//     return (
//         <div className={className}>
//             <hr className="mb-4 border-neutral-300" />
//             {answer}
//         </div>
//     );
// }
