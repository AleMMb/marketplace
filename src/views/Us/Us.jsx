import { useRef } from "react";

import "../Us/Us.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
function Us() {
  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_6cnqtoo";
    const templateID = "template_owu4i0i";
    const apiKey = "sIK5KU7TK_SUVthjm";

    emailjs
      .sendForm(serviceID, templateID, refForm.current, apiKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };

  return (
    <div className="UsContainer">
      <h1>Nosotros</h1>
      <p className="description-text">
        Uno ictu cruentus ille utrimque - statuit American Mexicanus
        gubernationes contra CONEXUS, et amputavit auriculam eius generis copia
        methamphetamine ad Africum. Quo facto suo, si huius huc termini velit
        vitae ipsum. Praemia essent ... ingentibus. Sumus tam adultis. Non est
        enim tibi nescio fingunt. Confusio esse cupio. Scio te debeo meae. At
        etiam, ut caveant ab his eu. In tuo positum, idem fecissem.
        Constitutione, quam molesta est mihi tres menses nescio quid de
        contractu fines nostros. Scis quare hoc facere. Lorem satis quaesitum.
        Loquélæ. Brevis oratio. Hodie particeps tua perdideris. Quid sui nominis
        - Emilio? Emilio gradiens ad carcerem. Tulitque omnem pecuniam tuam in
        DEA tuus Lab. Vos got nihil. Quadratum unum. Et ego agnosco rem, nisi te
        scire elit. Cogito ... maybe vos possem socium ascendit. Paenitet me
        quod tu me rogas? Oh, sic, qui stultus plastic continentis rogavi te ut
        emas. Vides non manducare acidum hydrofluoric per plastic. Erit autem
        dissolvere metalli petram, vitrum, tellus. Ita quod illic '.
      </p>

      <form ref={refForm} action="" className="contact-us-form" onSubmit={handleSubmit}>
        <h3>Contáctanos</h3>
        <p className="info">Envianos tus dudas, y tendrás respuesta en breve.</p>
        <p className="adv">
          no te estás suscribiando a nada, no te enviaremos emails molestos y no
          requiere estar registrado.
        </p>
        <label>Name</label>
        <input type="text" name="user_name"  placeholder="Ej: nombre apellido" required/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder="nombre@mail.com" required />
        <label>Message</label>
        <textarea name="message" rows={4} cols={50} required/> 
        <button>Enviar</button>
      </form>

      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default Us;
