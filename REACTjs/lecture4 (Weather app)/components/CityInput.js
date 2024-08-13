import React, { useState } from "react";

//to yha dekho normally to ham ese (props) krke value ko access krte hai but nhi to ham props ko ek proper name deke pass krte hai to vo ek object ki tarah hi pass
//hota hai that's why object ki tarah hi use access bhi kiya hai hamne yha pe ({onCityChange})
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
