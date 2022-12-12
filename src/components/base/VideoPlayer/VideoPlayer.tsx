import {
  CSSProperties,
  FC,
  VideoHTMLAttributes,
  useEffect,
  useRef,
} from 'react';

export type VideoStatus = 'ready' | 'play' | 'loading';

export interface VideoPlayerProps
  extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  status?: VideoStatus;
  loop?: boolean;
  autoPlay?: boolean;
  style?: CSSProperties;
}

export const VideoPlayer: FC<VideoPlayerProps> = (props) => {
  const {
    src,
    poster,
    status = 'play',
    loop = true,
    style = {},
    ...rest
  } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoDom = videoRef.current;

    if (videoDom && status === 'play') {
      videoDom.play();
    }
  }, [status]);

  return (
    <video
      playsInline
      ref={videoRef}
      controls={false}
      loop={loop}
      preload="true"
      autoPlay
      muted
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        ...style,
      }}
      src={src}
      poster={poster}
      {...rest}
    />
  );
};
