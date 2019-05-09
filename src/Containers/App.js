import React from "react";
import { Header, Footer } from "../Components/Layouts/index";
import Main from "../Components/Exercises/index";

import { muscles, exercises } from "../Store";

class App extends React.Component {
  state = {
    exercises,
    category: ""
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercises];
        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({ category });
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category } = this.state;
    console.log(this.getExercisesByMuscles());
    return (
      <div>
        <Header />
        <Main exercises={exercises} category={category} />
        <Footer muscles={muscles} category={category} onSelect={this.handleCategorySelected} />
      </div>
    );
  }
}

export default App;
