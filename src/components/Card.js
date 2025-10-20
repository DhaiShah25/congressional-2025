import React from "react";

const Card = React.forwardRef(({ style, children, ...props }, ref) => {
  const baseStyle = {
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    backgroundColor: "#ffffff",
    color: "#111827",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    overflow: "hidden",
  };
  return (
    <div ref={ref} style={{ ...baseStyle, ...style }} {...props}>
      {children}
    </div>
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ style, children, ...props }, ref) => {
  const baseStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    gap: "6px",
  };
  return (
    <div ref={ref} style={{ ...baseStyle, ...style }} {...props}>
      {children}
    </div>
  );
});
CardHeader.displayName = "CardHeader";

// Card title
const CardTitle = React.forwardRef(({ style, children, ...props }, ref) => {
  const baseStyle = {
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "1.2",
  };
  return (
    <h3 ref={ref} style={{ ...baseStyle, ...style }} {...props}>
      {children}
    </h3>
  );
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ style, children, ...props }, ref) => {
  const baseStyle = {
    fontSize: "14px",
    color: "#6b7280",
  };
  return (
    <p ref={ref} style={{ ...baseStyle, ...style }} {...props}>
      {children}
    </p>
  );
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ style, children, ...props }, ref) => {
  const baseStyle = {
    padding: "16px",
  };
  return (
    <div ref={ref} style={{ ...baseStyle, ...style }} {...props}>
      {children}
    </div>
  );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ style, children, ...props }, ref) => {
  const baseStyle = {
    display: "flex",
    alignItems: "center",
    padding: "16px",
  };
  return (
    <div ref={ref} style={{ ...baseStyle, ...style }} {...props}>
      {children}
    </div>
  );
});
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
