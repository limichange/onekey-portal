import { FC } from 'react';

import { motion } from 'framer-motion';

export interface FadeInProps {
  children: React.ReactNode;
}

export const FadeIn: FC<FadeInProps> = (props) => {
  const { children } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
