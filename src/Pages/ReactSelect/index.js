import { useState } from 'react'
import Select from 'react-select'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const ReactSelect = () => {
    const [value, setValue] = useState()
    const onChange = (newValue) => {
        console.log("e", newValue);
        setValue(newValue)
    }
    return (
        <div>
            {JSON.stringify(value)}
            <Select
                options={options}
                onChange={onChange}
                value={value}
                isClearable
                isLoading={false}
                isMulti
                closeMenuOnSelect={false}
            />
        </div>
    )
}
export default ReactSelect