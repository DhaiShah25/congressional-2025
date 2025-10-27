import React, { forwardRef } from "react";

const Card = forwardRef(({ className = "", children, ...props }, ref) => (
    <div
        ref={ref}
        className={`rounded-xl border text-gray-900 shadow-sm overflow-hidden ${className}`}
        {...props}
    >
        {children}
    </div>
));
Card.displayName = "Card";

const CardHeader = forwardRef(({ className = "", children, ...props }, ref) => (
    <div
        ref={ref}
        className={`flex flex-col p-4 gap-1.5 ${className}`}
        {...props}
    >
        {children}
    </div>
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef(({ className = "", children, ...props }, ref) => (
    <h3
        ref={ref}
        className={`text-xl font-semibold leading-tight ${className}`}
        {...props}
    >
        {children}
    </h3>
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef(({ className = "", children, ...props }, ref) => (
    <p
        ref={ref}
        className={`text-sm text-gray-500 ${className}`}
        {...props}
    >
        {children}
    </p>
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef(({ className = "", children, ...props }, ref) => (
    <div
        ref={ref}
        className={`p-4 ${className}`}
        {...props}
    >
        {children}
    </div>
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef(({ className = "", children, ...props }, ref) => (
    <div
        ref={ref}
        className={`flex items-center p-4 ${className}`}
        {...props}
    >
        {children}
    </div>
));
CardFooter.displayName = "CardFooter";

export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
};
