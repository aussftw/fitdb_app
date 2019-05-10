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

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  handleCategorySelect = category => {
    this.setState({ category });
  };

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;
    console.log(this.getExercisesByMuscles());
    return (
      <div>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Main
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelect}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelect}
        />
      </div>
    );
  }
}

export default App;
