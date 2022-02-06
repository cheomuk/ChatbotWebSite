import { FiFolderPlus } from "react-icons/fi";
import "./SelectFile.css";

const SelectFile = (props) => {

  return (
    <div>
      <label>
        <input
          type="file"
          className="imgFile"
          style={{ display: "none" }}
          onChange={props.onChange}
        />
        <FiFolderPlus className="btnFolder" size="2rem" />
      </label>
    </div>
  );
};

export default SelectFile;