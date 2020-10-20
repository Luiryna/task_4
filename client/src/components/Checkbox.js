import React from "react"

export const Checkbox = ({ name, checked, onChange }) => (
    <div className="form-check">
        <label>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="form-check-input"
            />
            {/* {name} */}
        </label>
    </div>
)