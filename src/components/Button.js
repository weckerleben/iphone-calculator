// Button.js
const Button = ({ label, onClick, className }) => {
  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
