import { FC, ReactNode } from 'react';

export interface LeftBorderIconProps {
  children?: ReactNode;
}

export const LeftBorderIcon: FC<LeftBorderIconProps> = (props) => {
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
          d="M33 1.35352H21C9.95431 1.35352 1 10.3078 1 21.3535V33.3535"
          stroke="black"
          strokeWidth="2"
        />
      </svg>

      {children}
    </div>
  );
};
