import { excelIcon, fileUploadIcon } from "../../assets/icons";
import styles from "./DragAndDropSection.module.css";
import React, {useState} from 'react'
import Image from "next/image";

const DragAndDropSection = () => {

    const [studentFileDisplayName, setStudentFileDisplayName] = useState<string | null>(null);
    const [dropAreaIcon, setDropAreaIcon] = useState(excelIcon);
    const acceptedFileTypes = ["xlsx", "xls", "csv"]

    const uploadFile = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      const filename = e.target.value.toString().split("\\").pop() || "";
      const extension = filename.split(".").pop() || "";
      acceptedFileTypes.includes(extension) ? 
      setStudentFileDisplayName(filename) : console.log("Please upload an excel file")
    }

    const drag = () => {
      setDropAreaIcon(fileUploadIcon)
    }
    const leave = () => {
      setDropAreaIcon(excelIcon)
    }

  return (
    <>
    {/* Drag and drop area */}
      <div className={styles.dropSection}>
        <div className={styles.dropSectionInner}>
          <h1>Upload Your Excel Sheet</h1>
          {
              studentFileDisplayName ? <p>{studentFileDisplayName}</p> : <Image width={30} height={30} src={dropAreaIcon} />
          }
          <input onDragOver={drag} onDragLeave={leave} accept=".png" type="file" onChange={uploadFile} />
        </div>
      </div>
      {/* Drop Down */}      
      {/* Generate Button */}
    </>
  );
};

export default DragAndDropSection;
