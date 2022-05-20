export const variants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const itemVariants = {
  open: {
    display: 'block',
    y: 0,
    opacity: 1,
    transition: { duration: 0.85 },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.85,
    },
  },
};
