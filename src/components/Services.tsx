import { ImVideoCamera } from 'react-icons/im';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { GiBigDiamondRing } from 'react-icons/gi';
import { servicesData } from '../data/data';
import { motion } from 'framer-motion';

// szines vektor grafika
function Services() {
  return (
    <div className="flex flex-col items-center flex-wrap">
      <div className="bg-gradient-to-b from-[#e3dace] to-[#EDE4D8] flex flex-row max-sm:flex-col pt-8 pb-12 items-center relative align-baseline">
        {servicesData.map(({ title, paragraph, icon }, idx) => (
          <Service title={title} icon={icon} paragraph={paragraph} key={idx} />
        ))}
      </div>
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
    <motion.div
      className="flex items-center flex-col"
      // when the element is in view, animate it fade in and slide up
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
      <h2 className=" font-bold text-gray-800 mb-5 align-baseline">{title}</h2>
      <p className="text-gray-600 mb-4 text-center">{paragraph}</p>
    </motion.div>
  );
}
