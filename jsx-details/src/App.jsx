import React from "react";
import "./App.css";
const App = () => {
  return (
    <>
      <Booklist />
    </>
  );
};

const Booklist = () => {
  return <Book />;
};

const Book = () => {
  return (
    <>
      <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41C-012Es8L._SY445_SX342_.jpg" />
      <h4>Atomic Habits</h4>
      <p>
        No matter your goals, Atomic Habits offers a proven framework for
        improving--every day. James Clear, one of the worlds leading experts on
        habit formation, reveals practical strategies that will teach you
        exactly how to form good habits, break bad ones, and master the tiny
        behaviors that lead to remarkable results
      </p>
    </>
  );
};
export default App;
