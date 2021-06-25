import React from "react";
import "./search-field.css"

export const Searchfield = ({placeholder, handleChange}) => {
    return (
        <div className="search-field">
            <input
                type="search"
                placeholder= {placeholder}
                className="search"
                onChange={handleChange}
            />
        </div>
    )
}

