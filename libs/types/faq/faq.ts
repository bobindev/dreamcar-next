import { FaqCategory, FaqStatus } from "../../enums/faq.eum";

export interface Faqs {
	_id: string;
	faqCategory: FaqCategory;
	faqStatus: FaqStatus;
	faqQuestion: string;
	faqAnswer: string;
	createdAt: Date;
}