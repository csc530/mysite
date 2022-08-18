import emailjs from '@emailjs/browser';

const serviceID = 'default_service';
const templateID = 'template_zwn6fj9';
emailjs.init('mhCMhgqfhd2Mb9WmX')
export default {
	sendEmail: (email: string, name: string, subject: string, message: string) => {
		let templateParams: Record<string, string> = {
			subject: subject,
			from_name: name,
			message: message,
			sender: email,
		};
		return emailjs.send(serviceID, templateID, templateParams);
	}
}