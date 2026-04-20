import React from "react";
import FolderGallery from "../components/gallery/FolderGallery";
import { Helmet } from "react-helmet";

function GalleryPage() {
  return (
    <div>
      <Helmet>
        <title>Gallery - CoreBTR</title>

        <meta
          name="description"
          content="Browse CoreBTR gallery showcasing snapshots of student's thrilling moments, learning highlights, Re-Union 2025, Diwali Party 2025 & Boot Camp 3.0."
        />
      </Helmet>

      <FolderGallery />
    </div>
  );
}

export default GalleryPage;
