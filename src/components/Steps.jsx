// import React from "react";

// const Steps = ({ stepsItems, currentStep }) => {
//     return (
//         <div className="max-w-2xl mx-auto px-4 md:px-0 mt-9 mb-8">
//             <ul aria-label="Steps" className="flex items-center text-gray-600 font-medium md:flex">
//                 {stepsItems.map((item, idx) => (
//                     <li 
//                         key={idx} 
//                         aria-current={currentStep === idx + 1 ? "step" : false} 
//                         className="flex-1 last:flex-none flex items-center"
//                     >
//                         <div className="flex items-center flex-col gap-y-2 md:gap-y-0 md:flex-row">
//                             <div 
//                                 className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${currentStep > idx + 1 ? "bg-indigo-600 border-indigo-600" : currentStep === idx + 1 ? "border-indigo-600" : ""}`}
//                             >
//                                 <span className={`${currentStep > idx + 1 ? "hidden" : ""} ${currentStep === idx + 1 ? "text-indigo-600" : ""}`}>
//                                     {idx + 1}
//                                 </span>
//                                 {currentStep > idx + 1 && (
//                                     <svg 
//                                         xmlns="http://www.w3.org/2000/svg" 
//                                         fill="none" 
//                                         viewBox="0 0 24 24" 
//                                         strokeWidth={1.5} 
//                                         stroke="currentColor" 
//                                         className="w-5 h-5 text-white"
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                                     </svg>
//                                 )}
//                             </div>
//                             <h3 className={`text-sm mt-4 md:mt-0 md:ml-4 ${currentStep === idx + 1 ? "text-indigo-600" : ""}`}>
//                                 {item}
//                             </h3>
//                         </div>
//                         {idx !== stepsItems.length - 1 && ( // Check if not the last item
//                             <div className="hidden md:flex">
//                                 <svg 
//                                     xmlns="http://www.w3.org/2000/svg" 
//                                     fill="none" 
//                                     viewBox="0 0 24 24" 
//                                     strokeWidth={1.5} 
//                                     stroke="currentColor" 
//                                     className="w-5 h-5 text-gray-500"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                                 </svg>
//                             </div>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Steps;
