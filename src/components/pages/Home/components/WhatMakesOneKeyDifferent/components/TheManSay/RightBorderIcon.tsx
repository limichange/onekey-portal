import { FC, ReactNode } from 'react';

export interface RightBorderIconProps {
  children?: ReactNode;
}

export const RightBorderIcon: FC<RightBorderIconProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <svg
        width="33"
        height="34"
        viewBox="0 0 33 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.19209e-07 32.3535H12C23.0457 32.3535 32 23.3992 32 12.3535V0.353516"
          stroke="black"
          strokeWidth="2"
        />
      </svg>

      {children}
    </div>
  );
};
