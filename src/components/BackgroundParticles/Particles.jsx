import ReactParticles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

// Define the initialization function for particles engine
export const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Define the particle options object
  const particleOptions = {
    particles: {
      number: {
        value: 4000,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 8,
        },
      },
      opacity: {
        value: 1.5,
        random: false,
        anim: {
          enable: true,
          speed: 1.5,
          opacity_min: 0.5,
          sync: false,
        },
      },
      size: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 100,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },

    retina_detect: true,
  };

  // Define the BackgroundParticles component
  return (
    <ReactParticles
      style={{
        backgroundColor: "#000",
      }}
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
    />
  );
};
