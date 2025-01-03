'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Hero.css'; // Importe o arquivo CSS aqui

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl w-full px-6 relative gap-10">
        {/* Texto */}
        <div className="text-left max-w-xl">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 animate-fadeIn text-white">
            Olá , eu sou <br />
            <span className="text-[#58a6ff]">Pedro Henrique</span>
          </h1>

          <p className="text-lg lg:text-xl opacity-90 leading-relaxed mb-8 animate-fadeIn delay-200 text-[#d1d1d1]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem repudiandae incidunt doloribus cumque, laborum cum dolore!
             Officia, cupiditate aperiam, dolorum sed suscipit dolore, repellendus esse minus corrupti placeat veniam?
          </p>

          <div className="flex gap-6">
            {/* Botão GitHub */}
            <Link
              href="https://github.com/PhTheDev"
              target="_blank"
              aria-label="GitHub"
              className="group w-14 h-14 flex items-center justify-center rounded-full bg-[#333333] hover:bg-[#58a6ff] hover:scale-110 transition-all duration-300 shadow-xl"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                className="text-[#58a6ff] group-hover:text-[#333333]"
              />
            </Link>

            {/* Botão LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/pedro-henrique-faria-6b22932a7/"
              target="_blank"
              aria-label="LinkedIn"
              className="group w-14 h-14 flex items-center justify-center rounded-full bg-[#333333] hover:bg-[#58a6ff] hover:scale-110 transition-all duration-300 shadow-xl"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className="text-[#58a6ff] group-hover:text-[#333333]"
              />
            </Link>

            {/* Botão Instagram */}
            <Link
              href="https://www.instagram.com/phfaria02/"
              target="_blank"
              aria-label="Instagram"
              className="group w-14 h-14 flex items-center justify-center rounded-full bg-[#333333] hover:bg-[#58a6ff] hover:scale-110 transition-all duration-300 shadow-xl"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="text-[#58a6ff] group-hover:text-[#333333]"
              />
            </Link>
          </div>
        </div>

        {/* Foto */}
        <div className="img-container relative flex justify-center items-center">
          {/* Animação da borda pulsante */}
          <div className="animate-pulseBorder"></div>

          <img
            src="/images/foto.png"
            alt="Pedro Henrique"
            className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] object-contain shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
