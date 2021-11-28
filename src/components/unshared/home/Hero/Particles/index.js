import { Glowing, Particle, ParticleRoot } from "./style";

const Particles = () => {
  return (
    <ParticleRoot>
      <Glowing xtra={false}>
        <Particle num={1}></Particle>
        <Particle num={2}></Particle>
        <Particle num={3}></Particle>
      </Glowing>
      <Glowing xtra={false}>
        <Particle num={1}></Particle>
        <Particle num={2}></Particle>
        <Particle num={3}></Particle>
      </Glowing>
      <Glowing extra={true}>
        <Particle num={1}></Particle>
        <Particle num={2}></Particle>
        <Particle num={3}></Particle>
      </Glowing>
      <Glowing extra={true}>
        <Particle num={1}></Particle>
        <Particle num={2}></Particle>
        <Particle num={3}></Particle>
      </Glowing>
    </ParticleRoot>
  );
};

export default Particles;
