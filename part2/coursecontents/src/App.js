import React from 'react'
import Course from './components/Course'

const App = ({courses}) =>
  <div>
    <h2>
    <Course courses={courses} />
    </h2>
  </div>

export default App