import React, { useState } from "react";

const CityInput = ({onCityChange}) =>{
    const [inputValue,setInputValue] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        onCityChange(inputValue);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="city-input">
            <input 
              type="text"
              value={inputValue}
              onChange={(e)=>setInputValue(e.target.value)}
              placeholder="Enter City Name"
            />
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default CityInput;
