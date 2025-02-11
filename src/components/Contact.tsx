import ContactForm from "./ContactForm";
import Divider from "./Divider";
import ReseauxSociaux from "./ReseauxSociaux";

export default function Contact() {
  return (
    <section className="bg-cyan-500">
      <Divider />
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 py-16">
      <div className=" col-span-3 mb-16">
        <h2 className="text-3xl text-center  font-bold text-gray-900">
          Prêt à démarrer 🚀 ?
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Remplissez le formulaire ou écrivez-moi directement. Je réponds en
          moins de 24h !
        </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <h2 className="text-3xl font-SpaceGrotesk font-bold text-gray-900">
            Contact me
          </h2>
          <p>Have a question or a project in mind? Feel free to reach out.</p>
          <p>Location: Colombia, Valle del cauca</p>
          <ReseauxSociaux />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
