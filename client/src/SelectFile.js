import { FiFolderPlus } from "react-icons/fi";
import "./SelectFile.css";
import { useState, useEffect } from "react";
import UnderBar from "./UnderBar";

export const SelectFile = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <label>
        <input
          type="file"
          onChange={onSelectFile}
          style={{ display: "none" }}
        />
        <FiFolderPlus className="btnFolder" size="2rem" />
        {selectedFile && 
        <img src={preview} className="img" />}
      </label>
    </div>
  );
};
export default SelectFile;


// import { FiFolderPlus } from "react-icons/fi";
// import "./SelectFile.css";
// import { useState, useEffect } from "react";

// export const SelectFile = () => {
//   const [selectedFile, setSelectedFile] = useState();
//   const [preview, setPreview] = useState();

//   // create a preview as a side effect, whenever selected file is changed
//   useEffect(() => {
//     if (!selectedFile) {
//       setPreview(undefined);
//       return;
//     }

//     const objectUrl = URL.createObjectURL(selectedFile);
//     setPreview(objectUrl);

//     // free memory when ever this component is unmounted
//     return () => URL.revokeObjectURL(objectUrl);
//   }, [selectedFile]);

//   const onSelectFile = (e) => {
//     if (!e.target.files || e.target.files.length === 0) {
//       setSelectedFile(undefined);
//       return;
//     }

//     // I've kept this example simple by using the first image instead of multiple
//     setSelectedFile(e.target.files[0]);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="file"
//           onChange={onSelectFile}
//           style={{ display: "none" }}
//         />
//         <FiFolderPlus className="btnFolder" size="2rem" />
//         {selectedFile && <img src={preview} className="img" />}
//       </label>
//     </div>
//   );
// };
// export default SelectFile;