import { motion } from "framer-motion";
import { cards } from "../../data/cards";
import type { CardItem } from "../../models";
import "./CardGrid.css";
import "../../styles/styles.css";

export default function CardGrid() {
	return (
		<section className="card-grid-section">
      <h2 className="section-title">The Executive Branch</h2>
      <div className="card-grid">
        {cards.map((card: CardItem, index) => (
          <motion.div
            className="card TemplateCard"
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src={card.image} alt={card.position} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.position}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
	);
}