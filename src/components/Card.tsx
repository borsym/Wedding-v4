import { motion } from 'framer-motion';

interface CardProps {
  idx: number;
  title: string;
  text: string;
  background: string;
  href: string;
  xCordForAnimation: number;
}

function Card({
  title,
  text,
  background,
  href,
  xCordForAnimation,
  idx,
}: CardProps) {
  return (
    <motion.figure
      className="mt-3 shadow-2xl transform  transition-all duration-300 filter grayscale hover:grayscale-0  cursor-pointer"
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      transition={{ duration: 0.2 * idx }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, scale: 1, x: 0 },
        hidden: { opacity: 0, scale: 0, x: -100 },
      }}
    >
      <a className="relative gradient" href={href}>
        <img src={background} alt="landing-background" className="test" />
      </a>
      <figcaption className="absolute top-3/4 left-1/2 translate text-white -translate-x-1/2 -translate-y-1/2 z-10">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-center">
          {title}
        </h2>
        <span className="font-normal">{text}</span>
      </figcaption>
    </motion.figure>
  );
}

export default Card;
