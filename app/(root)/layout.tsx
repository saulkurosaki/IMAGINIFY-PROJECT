import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth">
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default layout;
