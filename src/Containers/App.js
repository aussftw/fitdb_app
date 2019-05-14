import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Header, Footer } from "../Components/Layouts/index"
import Main from "../Components/Exercises/index"
import { Provider } from "../context"

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
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(ex => ex.id === id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
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

  getContext = () => ({
    muscles,
    ...this.state,
    exercisesByMuscles: this.getExercisesByMuscles(),
    onCategorySelect: this.handleCategorySelect,
    onCreate: this.handleExerciseCreate,
    onEdit: this.handleExerciseEdit,
    onSelectEdit: this.handleExerciseSelectEdit,
    onDelete: this.handleExerciseDelete,
    onSelect: this.handleExerciseSelect
  })

  render() {
    return (
      <Provider value={this.getContext()}>
        <div>
          <CssBaseline />
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App
