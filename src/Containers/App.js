import React from "react";
import { Header, Footer } from "../Components/Layouts/index";
import Main from "../Components/Exercises/index";

import { muscules, exercises } from "../Store";

class App extends React.Component {
  state = {
    exercises
  };

  getExercisesByMuscules() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscules } = exercise;

        exercises[muscules] = exercises[muscules] ? [...exercises[muscules], exercise] : [exercise];
        return exercises;
      }, {})
    );
  }

  render() {
    const exercises = this.getExercisesByMuscules();
    return (
      <div>
        <Header />
        <Main exercises={exercises} />
        <Footer muscules={muscules} />
      </div>
    );
  }
}

export default App;
