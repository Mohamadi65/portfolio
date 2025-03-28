import { Typewriter } from "react-simple-typewriter";

export default function Accroche() {
  return (

    <h1 className="text-2xl md:text-4xl font-bold text-center text-white mt-10">
      <span className="text-[#81BFDA]">
        <Typewriter
          words={[
            "Code, Creativity & Innovation "
          ]}
          loop={true} // La phrase ne se répète pas en boucle
          cursor
          cursorStyle="|" // Curseur style machine à écrire
          typeSpeed={120} // Vitesse d’écriture
          deleteSpeed={60} // Vitesse d’effacement (si loop = true)
        />
      </span>
    </h1>
  );
}
