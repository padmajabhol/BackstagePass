function Avatar({ src, alt = '', className = '', ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${className}`}
      {...props}
    />
  );
}

export default Avatar;
