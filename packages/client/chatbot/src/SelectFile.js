import { FiFolderPlus } from "react-icons/fi";
// import "./SelectFile.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import React from "react";

function SelectFile() {
  return (
    <>
      <div className="btnFolder" class="mb-3">
        <label for="formFile" class="form-label"></label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <FiFolderPlus
        className="btnFolder"
        size="2rem"
        // css={css({
        //   color: "black",
        //   justifyContent: "flex-end",
        // })}
      />
    </>
  );
}

export default SelectFile;
