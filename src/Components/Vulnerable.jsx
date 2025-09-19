import React from "react";

// ⚠️ Deliberately vulnerable: CodeQL should flag this as XSS
function Vulnerable({ userInput }) {
  return (
    <div>
      <h2>Vulnerable Component</h2>
      <div dangerouslySetInnerHTML={{ __html: userInput }} />
    </div>
  );
}

export default Vulnerable;
