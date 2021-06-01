import React from 'react'

const PersonForm = ({onSubmit, newName, handleNameChange, newNumber, handleNumberChange}) =>
  <form onSubmit={onSubmit}>
        <div>
            NAME: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
            NUMBER: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>

export default PersonForm