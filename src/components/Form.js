import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]); //state to handle the form submission
  const [errors, setErrors] = useState([]) //state to handle errors

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault()

    if(firstName.length > 0){
    const formData = { //object called formData where the keys are firstName and lastName with value from input
      firstName: firstName,
      lastName: lastName,
    };
    
    const dataArray = [...submittedData, formData] //state where submittedData is the current array and formData will push the latest object into the array
    setSubmittedData(dataArray); //accesses the state where the stores the value into the previous array
    setFirstName("") //form resets where first name is set to blank
    setLastName("") //form resets where last name is set to blank
    setErrors([])
  } else {
    setErrors(["First name is required"])
  }
}

  //used to display the names onto the webpage
  const listOfSubmissions = submittedData.map((data, index) =>{
    return(
      <div key={index}>
        {data.firstName} {data.lastName}
        </div>
    )
  })



  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    
    {/* Where the error message will display (if there is one). Error message will render after clicking submit */}
    {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}


    {/* Where we display the submitted names */}
    <h3>Submissions</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;
