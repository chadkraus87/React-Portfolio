import React from "react";
import myResume from "../../assets/files/Chadwick-Kraus-Full-Stack-Developer.pdf";

function Resume() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Resume</h2>
      <iframe
        src={myResume}
        title="Chadwick Kraus Resume"
        width="100%"
        height="800px"
      ></iframe>
    </div>
  );
}

export default Resume;
