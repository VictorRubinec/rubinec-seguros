import { successModal } from "./form.js";

const emailjs_key = window.env.EMAILJS_PUBLIC_KEY;
const emailjs_service_id = window.env.EMAILJS_SERVICE_ID;
const emailjs_template_id = window.env.EMAILJS_TEMPLATE_ID;

(function () {
  emailjs.init(emailjs_key);
})();

export function sendForm(data) {
  emailjs
    .send(emailjs_service_id, emailjs_template_id, data, emailjs_key)
    .then(function (response) {
        successModal();
    })
}