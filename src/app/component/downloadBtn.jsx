"use client";

import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    // Replace this with your actual file data
    const fileData = "/assets/juknis/juknisOlmat.pdf";

    const blob = new Blob([fileData], { type: "pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "JUKLAK JUKNIS OLMAT 2023.pdf"; // Set the desired filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download JUKNIS</button>
    </div>
  );
};

export default DownloadButton;
