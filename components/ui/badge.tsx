import React, { type FC } from "react";

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: FC<BadgeProps> = ({ children }) => {
  return (
    <span className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300">
      {children}
    </span>
  );
};

export default Badge;
