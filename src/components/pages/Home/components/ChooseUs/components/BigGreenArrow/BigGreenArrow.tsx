import { FC, ReactNode, useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { useMediaQuery, useRuntimeDetect } from '../../../../../../../hooks';

export interface BigGreenArrowProps {
  children?: ReactNode;
}

export const BigGreenArrow: FC<BigGreenArrowProps> = (props) => {
  const { children } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const { isSafari } = useRuntimeDetect();
  const media = useMediaQuery();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['center 70vh', 'center end'],
  });

  const opacity = useTransform(scrollYProgress, (value) =>
    media.medium ? 1 - value : 1,
  );
  const height = useTransform(scrollYProgress, (value) =>
    media.medium ? `${value * 100}%` : 0,
  );
  const filter = useTransform(scrollYProgress, (value) =>
    isSafari || !media.medium ? `blur(0)` : `blur(${value * 20}px)`,
  );

  return (
    <motion.div
      style={{ filter, opacity, position: 'relative' }}
      ref={containerRef}
    >
      <svg
        width="26"
        height="60"
        viewBox="0 0 26 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.0893 0.192994C17.0875 -0.279858 18.2801 0.146055 18.7529 1.1443C20.2324 4.26767 23.5367 11.4024 24.2672 18.3302C24.6338 21.807 24.3803 25.4616 22.7125 28.5756C22.4454 29.0744 22.1455 29.5527 21.8121 30.0088C21.8667 34.0977 20.6463 38.3291 19.0779 42.0798C17.4474 45.9788 15.3761 49.5093 13.7254 52.0517C12.8974 53.327 12.169 54.3632 11.645 55.0839C11.3829 55.4444 11.1716 55.7264 11.0241 55.9205C10.9504 56.0176 10.8925 56.0927 10.8523 56.1447L10.8052 56.2052L10.7919 56.2221L10.7879 56.2272L10.7866 56.2289C10.7861 56.2295 10.7857 56.2301 9.21591 54.9907L10.7857 56.2301C10.1012 57.097 8.84355 57.2449 7.9766 56.5605C7.10984 55.8762 6.96176 54.6189 7.6457 53.752M7.6457 53.752L7.65481 53.7404L7.69069 53.6943C7.72342 53.6521 7.77349 53.5871 7.83929 53.5005C7.97091 53.3273 8.16532 53.0679 8.40971 52.7317C8.89877 52.059 9.58637 51.0812 10.3705 49.8735C11.9439 47.4501 13.881 44.1393 15.3876 40.5366C16.3373 38.2654 17.0911 35.9365 17.4933 33.6793C16.2663 34.3257 14.8635 34.8403 13.2749 35.2059C8.62773 36.2754 5.0209 35.149 2.76566 32.5574C0.615415 30.0866 0.0164482 26.6434 0.480902 23.6316C0.942444 20.6387 2.54075 17.5697 5.41346 16.115C8.43842 14.5833 12.1489 15.1852 16.002 18.106C17.9569 19.5879 19.3426 21.3192 20.2693 23.1979C20.4605 21.8289 20.4562 20.3331 20.2893 18.7497C19.6389 12.5826 16.6341 6.01518 15.138 2.85664C14.6651 1.8584 15.091 0.665845 16.0893 0.192994M17.7247 28.636C17.4028 25.7809 16.1813 23.2613 13.5856 21.2937C10.4837 18.9423 8.42525 19.0736 7.22048 19.6836C5.86344 20.3708 4.77114 22.0561 4.43417 24.2413C4.10011 26.4075 4.59472 28.566 5.78308 29.9316C6.86645 31.1765 8.84327 32.1212 12.3778 31.3078C14.8251 30.7446 16.5326 29.7997 17.7247 28.636Z"
          fill="#16D629"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.22127 43.8744C5.2207 43.4041 6.41218 43.833 6.8825 44.8325C7.12563 45.3491 7.2458 45.952 7.31996 46.4435C7.40057 46.9777 7.45402 47.5828 7.49295 48.2031C7.55411 49.1774 7.58518 50.2964 7.6152 51.3773C7.62316 51.6638 7.63104 51.9476 7.63938 52.2253C7.6806 53.5967 7.73302 54.8135 7.84552 55.6977C7.85753 55.7922 7.86967 55.8779 7.88169 55.9554C9.65081 56.1664 11.9382 55.6378 14.583 54.6595C16.0075 54.1326 17.4253 53.5203 18.8118 52.9216C18.8663 52.898 18.9208 52.8745 18.9752 52.851C20.3817 52.2438 21.7916 51.6379 23.0335 51.2239C24.0814 50.8746 25.214 51.441 25.5633 52.4888C25.9126 53.5367 25.3463 54.6694 24.2984 55.0187C23.2507 55.3679 22.0063 55.8993 20.5607 56.5234C20.4968 56.551 20.4325 56.5787 20.3679 56.6066C19.0044 57.1955 17.4982 57.8461 15.9707 58.4111C12.8801 59.5543 9.18497 60.5597 5.96955 59.641C5.3126 59.4533 4.90193 59.0275 4.67707 58.7185C4.45188 58.4091 4.3141 58.0849 4.22573 57.8326C4.04869 57.3271 3.94637 56.7439 3.8775 56.2026C3.73693 55.0977 3.68169 53.693 3.64119 52.3455C3.6321 52.043 3.62373 51.7425 3.61546 51.4456C3.58564 50.3748 3.55714 49.3511 3.50081 48.4537C3.46509 47.8846 3.42049 47.4098 3.36474 47.0403C3.31753 46.7274 3.27477 46.5802 3.26352 46.5415C3.25995 46.5292 3.25956 46.5279 3.26322 46.5357C2.7929 45.5362 3.22183 44.3448 4.22127 43.8744ZM8.00757 56.5279C8.00753 56.528 8.00643 56.5255 8.00442 56.5201C8.0066 56.5251 8.00761 56.5278 8.00757 56.5279Z"
          fill="#16D629"
        />
      </svg>
      {children}
      <motion.div
        style={{
          width: '100%',
          height,
          position: 'absolute',
          background:
            'linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
          bottom: 0,
        }}
      />
    </motion.div>
  );
};