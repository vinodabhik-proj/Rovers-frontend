import { motion } from "framer-motion";
import { reports } from "../../data/reports";
import "./Reports.css";
import "../../styles/styles.css";
import type { ReportItem } from "../../models";

export default function Reports() {
	const options = {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
	return (
		<div className="Reports TopDiv">
			<h1>Match Reports</h1>
			<div className="cardColumn">
				{reports.map((report: ReportItem, index) => (
					<motion.div
						className="reportCard TemplateCard"
						key={report.id}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
						viewport={{ once: true }}
					>
						<div className="card-content">
							<h2 className="scoreboard">
								<span>Trumpinton Rovers</span>
								<span>{report.roversScore}</span>
								<span className="score-separator" />
								<span>{report.oppoScore}</span>
								<span>{report.oppoName}</span>
							</h2>
							<h4>Date: {report.date.toLocaleDateString("en-GB", options)}</h4>
							<h4>MOM: {report.mom}</h4>
							<h4>DOD: {report.dod}</h4>
							
						</div>
						<div className="descripCard TemplateCard">
								{report.description.split(/\n\s+\n/).map((para, index) => 
									<p key={index}>{para}</p>
								)}
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}