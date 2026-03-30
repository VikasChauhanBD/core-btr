import React from "react";
import BtrWorkBook from "../components/btrWorkBook/BtrWorkBook";
import Unannotated from "../components/unannotated/Unannotated";
import Annotated from "../components/annotated/Annotated";
import WhyWorkbooks from "../components/whyWorkbooks/WhyWorkbooks";
import UseWorkbook from "../components/useWorkbook/UseWorkbook";
import WorkBooksPrices from "../components/workBooksPrices/WorkBooksPrices";
import { Helmet } from "react-helmet";

function WorkbookPage() {
  return (
    <div>
      <Helmet>
        <title>Workbooks - Core BTR</title>

        <meta
          name="description"
          content="Core BTR Workbooks offers structured practice, concept-based questions & high-yield revision to strengthen exam preparation with confidence building."
        />
      </Helmet>

      <BtrWorkBook />
      <Unannotated />
      <Annotated />
      <UseWorkbook />
      <WhyWorkbooks />
      <WorkBooksPrices />
    </div>
  );
}

export default WorkbookPage;
