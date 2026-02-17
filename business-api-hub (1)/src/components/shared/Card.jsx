/**
 * Card - Reusable container component with consistent styling
 */
const Card = ({ children, className = "", hover = false, padding = "p-6" }) => {
  return (
    <div
      className={`
        bg-white rounded-xl border border-slate-200/60 shadow-sm
        ${padding}
        ${hover ? "card-hover cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
