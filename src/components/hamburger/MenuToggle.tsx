import { motion } from 'framer-motion';
import React from 'react';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };
// stroke and color changes the color not the fill..
export function MenuToggle({ toggle, isOpen }: any) {
  return (
    <button onClick={toggle} className="z-[99] cursor-pointer">
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(0, 0%, 100%)' },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 18%)' },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(0, 0%, 100%)"
          // stroke="yellow"
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'hsl(0, 0%, 100%)' },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 18%)' },
          }}
          transition={transition}
        />
      </svg>
    </button>
  );
}
