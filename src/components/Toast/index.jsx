import "./index.css";

const Toast = ({ show }) => {
  return (
    <div className={`toast ${show ? "show" : ""}`}>
      ✅ Message sent successfully!
    </div>
  );
};

export default Toast;
