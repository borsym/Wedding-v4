interface CardProps {
  title: string;
  text: string;
  background: string;
  href: string;
}

function Card({ title, text, background, href }: CardProps) {
  return (
    <figure className="mt-3 shadow-2xl transform  transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105 cursor-pointer">
      <a className="relative gradient" href={href}>
        <img src={background} alt="landing-background" className="test" />
      </a>
      <figcaption className="absolute top-3/4 left-1/2 translate text-white -translate-x-1/2 -translate-y-1/2 z-10">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-center">
          {title}
        </h2>
        <span className="font-normal">{text}</span>
      </figcaption>
    </figure>
  );
}

export default Card;
