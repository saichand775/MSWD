import React from 'react'

const Filter = ({value, onChange}) =>
    <div>
        Filter Shown With <input value={value} onChange={onChange} />
    </div>

export default Filter