import React from "react";
import { Header, Footer } from "../Components/Layouts/index";
import Main from "../Components/Exercises/index";

import { muscles, exercises } from "../Store";

class App extends React.Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercises];
        return exercises;
      }, {})
    );
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  handleCategorySelected = category => {
    this.setState({ category });
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;
    console.log(this.getExercisesByMuscles());
    return (
      <div>
        <Header />
        <Main
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelected}
        />
      </div>
    );
  }
}

export default App;
