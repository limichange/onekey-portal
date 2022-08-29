import { FC, createElement } from 'react';

import { Button, ButtonProps, Flex, Link } from '../../../../base';

import { InfoText } from './InfoText';

const iconSize = {
  width: 24,
  height: 24,
};

export interface DownloadButtonProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  rightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  information: string[] | string;
  buttonType?: ButtonProps['variant'];
  buttonSize?: ButtonProps['size'];
  buttonMaxWidth?: string | number;
  url?: string;
  onClick?: ButtonProps['onClick'];
}

export const DownloadButton: FC<DownloadButtonProps> = (props) => {
  const {
    information,
    text,
    icon,
    rightIcon,
    url = '',
    buttonSize = 'large',
    buttonType = 'outlined',
    buttonMaxWidth = 220,
    onClick,
  } = props;

  return (
    <Flex
      xs={{
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1,
        maxWidth: buttonMaxWidth,
      }}
    >
      <Link disabled={!url} css={{ width: '100%' }} to={url}>
        <Button
          onClick={onClick}
          fillWidth
          disabled={!url}
          leftIcon={createElement(icon, iconSize)}
          rightIcon={rightIcon && createElement(rightIcon, iconSize)}
          size={buttonSize}
          variant={buttonType}
        >
          {text}
        </Button>
      </Link>

      <Flex xs={{ flexDirection: 'column', paddingTop: 8 }}>
        {Array.isArray(information) ? (
          information.map((info) => <InfoText key={info}>{info}</InfoText>)
        ) : (
          <InfoText>{information}</InfoText>
        )}
      </Flex>
    </Flex>
  );
};
