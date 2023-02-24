import { useAppContext } from "../../context/appContext";

const Alert = () => {
  // provide alert values from global context
  const { alertType, alertText } = useAppContext();

  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
