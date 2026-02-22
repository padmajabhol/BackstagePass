function IconButton({ children, className = '', ...props }) {
  return (
    <button
      className={`
        flex items-center justify-center
        h-8 w-8
        rounded-full
        border border-gray-300 dark:border-white/20
        hover:bg-gray-100 dark:hover:bg-gray-800
        transition-colors
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default IconButton;
