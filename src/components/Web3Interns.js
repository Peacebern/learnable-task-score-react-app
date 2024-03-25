// FrontendInterns.js
import React, { useState, useEffect } from "react";
// import "./FrontendInterns.css"; // Import shared CSS for table styling

const Web3Interns = () => {
  const [interns, setInterns] = useState([
    {
      id: 1,
      name: "Emeka Idam",
      info: "Web3",
      Task1: 8,
      Task2: 10,
      overallGrade: 0,
      image:
        "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Emeka Austine",
      info: "Web3",
      Task1: 8,
      Task2: 9,
      overallGrade: 0,
      image: "",
    },
    {
      id: 3,
      name: "Nuel Desmond",
      info: "Web3",
      Task1: 9,
      Task2: 9,
      overallGrade: 0,
      image:
        "https://images.unsplash.com/photo-1520451644838-906a72aa7c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhY2VzfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Prince Williams",
      info: "Web3",
      Task1: 6,
      Task2: 10,
      overallGrade: 0,
      image: "",
    },
    {
      id: 5,
      name: "Eze Arinze",
      info: "Web3",
      Task1: 8,
      Task2: 10,
      overallGrade: 0,
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXN8ZW58MHx8MHx8fDA%3D",
    },
    // Add more interns
  ]);

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
      {/* <h2>Web3 Interns</h2> */}
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
      <h3>Learderboard</h3>
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Learning path</th>
            <th>Task1</th>
            <th>Task2</th>
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

export default Web3Interns;
