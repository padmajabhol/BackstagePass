function Button({ children, variant = 'default', className = '', ...props }) {
  const variants = {
    default: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    primary: 'bg-black text-white',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
  };

  return (
    <button
      className={`
        px-3 py-1
        rounded-full
        transition
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
