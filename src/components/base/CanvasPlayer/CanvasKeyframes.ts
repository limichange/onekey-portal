import {
  AnimatedSprite,
  Application,
  Assets,
  Resource,
  Texture,
} from 'pixi.js';

type Config = {
  element: HTMLCanvasElement;
  images: string[];
  width: number;
  height: number;
};

export function init(
  config: Config,
  onLoad: (arg0: { app: Application; animatedSprite: AnimatedSprite }) => void,
): Application {
  const { element, width, height, images } = config;

  const app = new Application({
    view: element,
    width,
    height,
    resolution: window.devicePixelRatio,
    autoDensity: true,
    antialias: true,
    backgroundAlpha: 0,
  });

  // set black background
  // app.renderer.backgroundColor = 0xffffff;

  // remove duplicated images
  const imagesWithoutDuplicated = images.filter(
    (image, index) => images.indexOf(image) === index,
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  Assets.loadBundle(imagesWithoutDuplicated).then(() => {
    // create textures from resources
    const textures: Texture<Resource>[] = [];

    for (const image of images) {
      const t = Texture.from(image);

      textures.push(t);
    }

    // create a new SpriteBatch
    const animatedSprite = new AnimatedSprite(textures);

    // animatedSprite speed
    animatedSprite.animationSpeed = 0.5;

    animatedSprite.loop = false;

    animatedSprite.scale.set(width, height);

    // add the sprite to the stage
    app.stage.addChild(animatedSprite);

    onLoad({
      app,
      animatedSprite,
    });
  });

  return app;
}
