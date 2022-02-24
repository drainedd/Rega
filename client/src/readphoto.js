import React, { useState } from "react";

const AddNew = () => {
  const [file, setFile] = useState(null);
  const fileHandler = event => {
    console.log(event.target.files[0]);
    let reader = new FileReader();
    reader.onload = function(e) {
      setFile(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className="addNew">
      <img src={file} alt={""} />
      <input type="file" onChange={fileHandler} />
    </div>
  );
};

export default AddNew;