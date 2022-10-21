import { Link, LogoDownloadModalArea } from '../../../base';
import { Logo } from '../../../base/Logo';

export const LogoIcon = (
  <Link to="/">
    <LogoDownloadModalArea>
      <Logo
        css={{
          width: 48,
          height: 48,
          color: 'black',
        }}
      />
    </LogoDownloadModalArea>
  </Link>
);
