import React from "react";
import { cn } from "../../lib/utils";

interface Award {
  title: string;
  description: string;
  link?: string;
}

export const HoverEffect = ({ items, className }: { items: Award[], className?: string }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </div>
  );
};

export const Card = ({ item }: { item: Award }) => {
  return (
    <div 
      className="group relative flex flex-col justify-between rounded-xl border border-zinc-700 bg-gradient-to-t from-zinc-900 to-zinc-800/50 p-4 md:p-6 overflow-hidden transition-all duration-200 hover:shadow-md hover:shadow-blue-500/20 hover:-translate-y-1"
      onClick={() => item.link && window.open(item.link, "_blank")}
      style={{ cursor: item.link ? "pointer" : "default" }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-blue-900/[0.06] via-transparent to-indigo-900/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <CardTitle>{item.title}</CardTitle>
      
      {item.description && (
        <CardDescription>{item.description}</CardDescription>
      )}
      
      {item.link && (
        <div className="mt-4 flex items-center text-xs text-blue-400 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span>Learn more</span>
          <svg 
            className="ml-1 w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      )}
    </div>
  );
};

export const CardTitle = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-zinc-100 font-medium mb-2", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm leading-relaxed text-zinc-400", className)}>
      {children}
    </p>
  );
}; 