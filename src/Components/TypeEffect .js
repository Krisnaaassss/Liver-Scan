import React from "react";
import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            "NIM 4611420092",
            "Mahasiswa Teknik Informatika",
            "Tahun Angkatan 2020",
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 15,
        }}
      />
    </div>
  );
};

export default TypeEffect;
