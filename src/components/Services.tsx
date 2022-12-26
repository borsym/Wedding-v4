import { ImVideoCamera } from 'react-icons/im';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { GiBigDiamondRing } from 'react-icons/gi';
import { servicesData } from '../data/data';

// ELBASSZA A RESZPONZIVITAST
function Services() {
  return (
    <div className="bg-[#EDE4D8] flex flex-row max-sm:flex-col pt-8 items-center relative align-baseline">
      {servicesData.map(({ title, paragraph, icon }, idx) => (
        <Service title={title} icon={icon} paragraph={paragraph} key={idx} />
      ))}
    </div>
  );
}

export default Services;

interface ServiceProps {
  title: string;
  icon: any;
  paragraph: string;
}

function Service({ title, icon, paragraph }: ServiceProps) {
  // TODO test nem responsives
  return (
    <div className="flex items-center flex-col">
      {icon}
      <h2 className=" font-bold text-gray-800 mb-5 align-baseline">{title}</h2>
      <p className="text-gray-600 mb-4 text-center">{paragraph}</p>
    </div>
  );
}
