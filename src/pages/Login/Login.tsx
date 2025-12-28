import "../../components/CardGrid/CardGrid.css";
import { motion } from "framer-motion";
import getApiUrl from "../../hooks/apiUrl";

export default function Login() {
  const API_URL = getApiUrl()

  const loginWithFacebook = () => {
    window.location.href = `${API_URL}/auth/facebook/login`;
  };

  return (
    	<section className="card-grid-section">
      <h2 className="section-title">Login</h2>
      <div className="card-grid login" onClick={loginWithFacebook}>
          <motion.div
            className="card TemplateCard"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* <img src={card.image} alt={card.position} className="card-image" /> */}
            <div className="card-content">
              <h3 className="card-title">Faceboook</h3>
            </div>
          </motion.div>
      </div>
    </section>
  );
}