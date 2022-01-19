import { CloudUploadIcon, DocumentTextIcon } from "@heroicons/react/outline";
import styles from "./DragAndDropSection.module.css";
import React, { useState } from "react";
import { Button, Input } from "..";

const DragAndDropSection = () => {
  const acceptedFileTypes = ["xlsx", "xls", "csv"];
  const [studentFileDisplayName, setStudentFileDisplayName] = useState<
    string | null
  >(null);
  const [dropAreaIcon, setDropAreaIcon] = useState(
    <DocumentTextIcon className="h-12 mb-3 text-slate-500" />
  );
  const [fileTypeAlert, setFileTypeAlert] = useState(false);
  const [numGroups, setNumGroups] = useState(1);

  const uploadFile = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFileTypeAlert(false);
    const filename = e.target.value.toString().split("\\").pop() || "";
    const extension = filename.split(".").pop() || "";
    if (acceptedFileTypes.includes(extension)) {
      setStudentFileDisplayName(filename);
      setFileTypeAlert(false);
    } else {
      setFileTypeAlert(true);
    }
  };

  const drag = () => {
    setDropAreaIcon(<CloudUploadIcon className="h-12 mb-3 text-slate-500" />);
  };

  const leave = () => {
    setDropAreaIcon(<DocumentTextIcon className="h-12 mb-3 text-slate-500" />);
  };

  const splitIntoGroups = () => {
    // Grouping logic here

  }

  return (
    <>
      {/* Drag and drop area */}
      <div className={styles.dropSectionInner}>
        <p className="text-slate-700 text-base mb-2 font-semibold">
          Drop your spread sheet here, or browse
        </p>
        {dropAreaIcon}
        <p className="text-slate-400 text-s">
          {studentFileDisplayName
            ? studentFileDisplayName
            : "Supports CSV, XLS, XLSX"}
        </p>
        <input
          onDragOver={drag}
          onDragLeave={leave}
          onDrop={leave}
          type="file"
          onChange={uploadFile}
        />
      </div>
      {fileTypeAlert ? (
        <div
          className="my-4 bg-red-50 border border-red-300 text-red-700 px-10 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">
            Please upload a file ending in <b>.xlsx , .xls or .csv</b>
          </span>
        </div>
      ) : null}
      <div className="my-4 w-1/3 gap-4 flex flex-row justify-center">
        {/* Drop Down */}
        <Input type="number" value={numGroups} onChange={(e) => setNumGroups(e.target.value)} min={1} placeHolder="Group into" padding="px-3 py-2" />
        {/* Generate Button */}
        <Button onClick={splitIntoGroups} value="Generate" width="w-1/3" padding="px-3 py-2" />
      </div>
    </>
  );
};

export default DragAndDropSection;
