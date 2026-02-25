import "../../components/CardGrid/CardGrid.css";
import { motion } from "framer-motion";
import getApiUrl from "../../hooks/apiUrl";
import "../../styles/styles.css";
import "./Login.css";
import { FaMicrosoft } from "react-icons/fa";

export default function Login() {
  const API_URL = getApiUrl();

  const loginWithMicrosoft = () => {
    window.location.href = `${API_URL}/auth/entra/login`;
  };

  return (
    <div className="TopDiv loginDiv">
      <h2 className="title">Login</h2>
      <div className="card-grid loginGrid" onClick={loginWithMicrosoft}>
        <motion.div
          className="loginCard TemplateCard"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <FaMicrosoft className="msIcon" />
          <div className="card-content">
            <h3 className="card-title">Microsoft</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}