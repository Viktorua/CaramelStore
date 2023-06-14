// import Select from "react-select";


// function App() {
    
//   const options = [
//     { value: "Option 1", label: "Option 1" },
//     { value: "Option 2", label: "Option 2" },
//     { value: "Option 3", label: "Option 3" },
//   ];
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   function handleSelectOption(selectedOptions) {
//     setSelectedOptions(selectedOptions);
//   }

//   return (
//     <Select
//       isMulti
//       options={options}
//       value={selectedOptions}
//       onChange={handleSelectOption}
//     />
//   );
// }

// export default App;
import React, { useState } from 'react';

function App() {
    const options = ["Option 1", "Option 2", "Option 3"];
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    function handleSelectOption(e) {
      const value = e.target.value;
      if (selectedOptions.includes(value)) {
        setSelectedOptions(selectedOptions.filter((option) => option !== value));
      } else {
        setSelectedOptions([...selectedOptions, value]);
      }
    }
  
    return (
      <form>
        {options.map((option) => (
          <label key={option}>
            <input type="checkbox" value={option} onChange={handleSelectOption} />
            {option}
          </label>
        ))}
      </form>
    );
  }

  export default App;