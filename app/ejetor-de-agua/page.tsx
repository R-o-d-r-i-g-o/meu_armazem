"use client";

import MainButton from "@/components/common/MainButton";
import NavBar from "@/components/common/NavBar";

import data from "./data.json";

const WaterEjector = () => {
  const ejectWater = () => {
    const audioContext = new window.AudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Frequência em Hz
    gainNode.gain.setValueAtTime(1, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
      audioContext.close();
    }, 5000);
  };

  return (
    <>
      <NavBar />
      <div className="mt-24 md:32 lg:mt-8 px-4 md:px-[9rem] md:pt-6">
        <p className="text-lightBlue font-bold text-2xl text-center">
          Ejetor de água*
        </p>
        <p className="text-customLightGray text-[1.2rem] mt-4 mb-8 text-center">
          Ao pressionar o botão abaixo, será emitido um som grave por cinco
          segundos.
        </p>
        <div className="flex justify-center my-8">
          <MainButton size="large" text="ligar o som" action={ejectWater} />
        </div>
        {data.map((el) => (
          <>
            <p className="text-lightBlue font-bold text-2xl text-center">
              {el.title}
            </p>
            <p className="text-customLightGray text-[1.2rem] mt-4 mb-8">
              {el.text}
            </p>
          </>
        ))}
      </div>
    </>
  );
};

export default WaterEjector;
