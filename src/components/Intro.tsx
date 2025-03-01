import Button from "./Button";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="flex flex-col gap-7 order-2 md:order-none">
        <div>
          <h1 className="text-4xl font-Geist font-bold">Dylane Tano</h1>
          <div className="text-md flex gap-2 items-center">
            <span>Développeur JavaScript au Canada</span>
            <Image
              src="/images/canada.png"
              alt="drapeau canada"
              width={32}
              height={32}
            />
          </div>
        </div>
        <p className="text-md">
          Je suis un développeur autodidacte qui aime créer des choses pour le web...
        </p>
        <div className="grid md:flex">
          {/* 👉 Lien autour du bouton */}
          <a href="/doc/CV_Tano_Dylane.pdf" download="CV_Tano_Dylane.pdf">
            <Button text="Téléchargez mon CV" />
          </a>
        </div>
      </div>
      <div className="order-1 md:order-none">
        <Image src="/images/moi-bg.png" alt="moi" width={300} height={300} />
      </div>
    </section>
  );
}
