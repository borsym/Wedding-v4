interface CardProps {
  title: string;
  text: string;
  background: string;
}

function Card({ title, text, background }: CardProps) {
  return (
    <div className="mt-3 shadow-2xl transform transition duration-300 hover:scale-105 cursor-pointer">
      <a className="relative gradient">
        <div className="absolute top-3/4 left-1/2 translate text-white -translate-x-1/2 -translate-y-1/2 z-10">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-center">
            {title}
          </h2>
          <span className="font-normal">{text}</span>
        </div>
        <img src={background} alt="landing-background" className="test" />
      </a>
    </div>
  );
}

export default Card;
