import React from "react";
import BtrWorkBook from "../components/btrWorkBook/BtrWorkBook";
import Unannotated from "../components/unannotated/Unannotated";
import Annotated from "../components/annotated/Annotated";

function WorkbookPage() {
  return (
    <div>
      <BtrWorkBook />
      <Unannotated />
      <Annotated />
    </div>
  );
}

export default WorkbookPage;
