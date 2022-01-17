import { excelIcon } from "../../assets/icons";
import styles from "./DragAndDropSection.module.css";

const DragAndDropSection = () => {
  return (
    <>
      <div className={styles.dropSection}>
        <div className={styles.dropSectionInner}>
          <header>Upload Your Excel Sheet</header>
          {/* <img src={excelIcon} /> */}
          <input type="file" className={styles.dropSectionInput} />
        </div>
      </div>
    </>
  );
};

export default DragAndDropSection;
