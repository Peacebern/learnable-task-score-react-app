//Frontend Interns
import React, { useState, useEffect } from "react";
import "./FrontendInterns.css"; // Import shared CSS for table styling
import "./MediaQuery.css";

const FrontendInterns = () => {
  const [interns, setInterns] = useState([
    {
      id: 1,
      name: "Elizabeth Chinedu",
      info: "Front-end",
      Task1: 7,
      Task2: 10,
      overallGrade: 0, // Initially set to 0
      image: "",
    },
    {
      id: 2,
      name: "Eze Ifunanya",
      info: "Front-end",
      Task1: 10,
      Task2: 10,
      overallGrade: 0, // Initially set to 0
      image:
        "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhY2VzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Nuel Desmond",
      info: "Front-end",
      Task1: 8,
      Task2: 10,
      overallGrade: 0,
      image:
        "https://images.unsplash.com/photo-1520451644838-906a72aa7c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhY2VzfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Prince Williams",
      info: "Front-end",
      Task1: 6,
      Task2: 10,
      overallGrade: 0,
      image: "",
    },
    {
      id: 5,
      name: "Eze Arinze",
      info: "Front-end",
      Task1: 9,
      Task2: 10,
      overallGrade: 0,
      image:
        "https://images.unsplash.com/photo-1587064712555-6e206484699b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2VzfGVufDB8fDB8fHww",
    },
    // Add more interns
  ]);

  // useEffect(() => {
  //   // Calculate overall grade for each intern
  //   const updatedInterns = interns.map((intern) => ({
  //     ...intern,
  //     overallGrade: (intern.Task1 + intern.Task2) / 2, // Calculate average
  //   }));

  //   // Sort interns based on their overall grades in descending order
  //   const sortedInterns = [...updatedInterns].sort(
  //     (a, b) => b.overallGrade - a.overallGrade
  //   );

  //   setInterns(sortedInterns);
  // }, [interns]);

  // Deep comparison function to check if two arrays of objects are equal
  function isEqual(arr1, arr2) {
    // If lengths are different, arrays are not equal
    if (arr1.length !== arr2.length) {
      return false;
    }

    // Iterate through each item in the arrays
    for (let i = 0; i < arr1.length; i++) {
      // Check if each property of the objects is equal
      for (let key in arr1[i]) {
        if (arr1[i][key] !== arr2[i][key]) {
          return false;
        }
      }
    }

    // If no differences found, arrays are equal
    return true;
  }

  useEffect(() => {
    // Calculate overall grade for each intern
    const updatedInterns = interns.map((intern) => ({
      ...intern,
      overallGrade: (intern.Task1 + intern.Task2) / 2, // Calculate average
    }));

    // Sort interns based on their overall grades in descending order
    const sortedInterns = [...updatedInterns].sort(
      (a, b) => b.overallGrade - a.overallGrade
    );

    // Check if the sorted interns are different from the current state before updating
    if (!isEqual(sortedInterns, interns)) {
      setInterns(sortedInterns);
    }
  }, [interns]);

  // Extract top 3 interns
  const topThreeInterns = interns.slice(0, 3);

  return (
    <div>
      {/* <h2>Frontend Interns</h2> */}
      <div className="top-class">
        {topThreeInterns.map((intern, index) => (
          <div className="top-class-e" key={intern.id}>
            <img src={intern.image} alt={intern.name} />
            <p>
              {index + 1} - {intern.name}: {intern.overallGrade}
            </p>
          </div>
        ))}
      </div>
      <h3>Leaderboard</h3>
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Learning path</th>
            <th>Task 1</th>
            <th>Task 2</th>
            <th>Overall Grading</th>
          </tr>
        </thead>
        <tbody>
          {interns.map((intern, index) => (
            <tr key={intern.id}>
              <td>{index + 1}</td>
              <td>{intern.name}</td>
              <td>{intern.info}</td>
              <td>{intern.Task1}</td>
              <td>{intern.Task2}</td>
              <td>{intern.overallGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FrontendInterns;
