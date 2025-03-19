import { successModal } from "./form.js";

import { emailjs_key, emailjs_service_id, emailjs_template_id } from "../../env.js";

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