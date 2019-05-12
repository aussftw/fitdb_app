import React from "react"
import { Header, Footer } from "../Components/Layouts/index"
import Main from "../Components/Exercises/index"

import { muscles, exercises } from "../Store"

class App extends React.Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce(
      (exercises, category) => ({ ...exercises, [category]: [] }),
      {}
    )
    console.log(muscles, initExercises)

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = [...exercises[muscles], exercise]

        return exercises
      }, initExercises)
    )
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }))
  }

  handleCategorySelect = category => {
    this.setState({ category })
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id === id),
      editMode: false,
      exercise: {}
    }))
  }

  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.find(ex => ex.id === id),
      editMode: true
    }))
  }

  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise]
    }))

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise, editMode } = this.state
    console.log(this.getExercisesByMuscles())
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
          muscles={muscles}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          editMode={editMode}
          onEdit={this.handleExerciseEdit}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelect}
        />
      </div>
    )
  }
}

export default App
