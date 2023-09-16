import React from "react";
import myResume from "..Chadwick-Kraus-Resume-Sept-23";

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
      <a
        href="https://drive.google.com/file/d/1jdHgHOUXJZ_ZiOINaP87z8Vgj7awnttc/view?usp=drive_link"
        target="_blank"
        rel="noreferrer"
      >Download or Print Resume</a>
    </div>
  );
}

export default Resume;