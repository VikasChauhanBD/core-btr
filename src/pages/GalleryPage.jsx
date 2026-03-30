import React from "react";
import FolderGallery from "../components/gallery/FolderGallery";
import { Helmet } from "react-helmet";

function GalleryPage() {
  return (
    <div>
      <Helmet>
        <title>Gallery - Core BTR</title>

        <meta
          name="description"
          content="Explore the Core BTR Gallery to view highlights of learning moments, success snapshots that reflect focused preparation & smart revision strategies."
        />
      </Helmet>

      <FolderGallery />
    </div>
  );
}

export default GalleryPage;
