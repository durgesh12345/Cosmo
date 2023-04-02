import React, { useState } from 'react';

function InterfaceEditor() {
  const [fields, setFields] = useState([]);

  // addField function to add a new field
  const addField = () => {
    setFields([...fields, { name: '', type: 'string' }]);
  };



  // deleteField function to delete a field by index
  const deleteField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  // handleNameChange function to update the name of a field by index
  const handleNameChange = (event, index) => {
    const newFields = [...fields];
    newFields[index].name = event.target.value;
    setFields(newFields);
  };

  // handleTypeChange function to update the type of a field by index
  const handleTypeChange = (event, index) => {
    const newFields = [...fields];
    newFields[index].type = event.target.value;
    setFields(newFields);
  };

  // handleSubmit function to console log the updated data
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    
    <form  id = "form" onSubmit={handleSubmit}>
    Fill Name and Type
     <button id= "button" type="button" onClick={addField}>
        Add Field
      </button>
      <button id= "button" type="submit">Save</button>
      {fields.map((field, index) => (
        <div  key={index}>
          <input  id = 'inputupdate'
            type="text"
            value={field.name}
            onChange={(event) => handleNameChange(event, index)}
          />
          <select id= "button" value={field.type} onChange={(event) => handleTypeChange(event, index)}>
            <option value="string">String</option>
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
            <option value="object">Object</option>
          </select>
          <button id= "button" type="button" onClick={() => deleteField(index)}>
            Delete
          </button>
           <button id= "button" type="button" onClick={addField}>
        Add Field
      </button>
     
        </div>
      ))}
     
    </form>
  );
}

export default InterfaceEditor;
