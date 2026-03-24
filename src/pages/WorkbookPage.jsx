import React from "react";
import BtrWorkBook from "../components/btrWorkBook/BtrWorkBook";
import Unannotated from "../components/unannotated/Unannotated";
import Annotated from "../components/annotated/Annotated";
import WhyWorkbooks from "../components/whyWorkbooks/WhyWorkbooks";
import UseWorkbook from "../components/useWorkbook/UseWorkbook";

function WorkbookPage() {
  return (
    <div>
      <BtrWorkBook />
      <Unannotated />
      <Annotated />
      <UseWorkbook />
      <WhyWorkbooks />
    </div>
  );
}

export default WorkbookPage;
