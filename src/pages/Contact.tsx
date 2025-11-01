import React from "react";
import ContactHeroSection from "../components/contact/ContactHeroSection";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const Contact: React.FC = () => {
	return (
		<div className="bg-white">
			<ContactHeroSection />

			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16">
						<ContactForm />
						<ContactInfo />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
