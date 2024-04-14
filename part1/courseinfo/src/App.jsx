import Header from "./Header"; //Remember to import as well!
import Content from "./Content";
import Total from "./Total";

const App = () => { //function expression; components are essentially functions.
  const course = "Half Stack application development";

  //array with key values
  const parts = [
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "State of a component", exercises: 14 },
    //can add other parts here if needed.
  ];

  return (
    <>
      <Header course={course} />
      {parts.map((part, index) => (
        <Content key={index} part={part.part} exercise={part.exercises} />
      ))}
      <Total parts={parts} />
    </>
  );
};


// OLD INFO

// const App = () => {
//   // const-definitions

//   return (
//     <div>
//       <Header course={course} />
//       <Content ... />
//       <Total ... />
//     </div>
//   )
// }

export default App;
