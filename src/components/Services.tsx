import { ImVideoCamera } from 'react-icons/im';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { GiBigDiamondRing } from 'react-icons/gi';
import { servicesData } from '../data/data';
import { motion } from 'framer-motion';

// szines vektor grafika
function Services() {
  return (
    <div className="flex flex-col items-center flex-wrap">
      {/* #FFE9CF */}
      <div className="bg-gradient-to-b from-[#FFE9CF] to-[#f5f1ec] flex flex-row max-sm:flex-col pt-8 pb-12 items-center relative align-baseline">
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
      transition={{ duration: 0.7 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0, y: 100 },
      }}
    >
      {icon}
      <h2 className=" font-bold text-gray-800 mb-5 align-baseline">{title}</h2>
      <p className="text-gray-600 mb-4 text-center">{paragraph}</p>
    </motion.div>
  );
}
