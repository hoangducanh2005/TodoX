import React from "react";

export const Header = () => {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-4xl font-bold text-transparent bg-primary bg-clip-text">
        TaskFlow
      </h1>

      <p className="text-muted-foreground">
        No job is too hard, only afraid of not trying 💪
      </p>
    </div>
  );
};

export default Header;