import { FC, ReactNode, useEffect, useRef } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../../../../../base';

export type TextContainerStatus = 'ready' | 'play';

export interface TextContainerProps {
  children?: ReactNode;
  id: string;
  status: TextContainerStatus;
}

function isEmojiContainer(element: Element) {
  return !!element.className?.includes('emoji-container');
}

function isLogo(element: Element) {
  return !!element.className?.includes('logo');
}

export const TextContainer: FC<TextContainerProps> = (props) => {
  const { children, id, status } = props;
  const theme = useTheme();
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dom = ref.current;

    if (!dom) {
      return;
    }

    const doms = Array.from(dom.children);
    let newContent = '';
    let newContentBackground = '';

    doms.forEach((childNode) => {
      if (isEmojiContainer(childNode) || isLogo(childNode)) {
        newContent += childNode.outerHTML;
        newContentBackground += `<span style="opacity: 0">${childNode.outerHTML}</span>`;
      } else {
        const newSpanCollection = childNode.innerHTML
          .split('')
          .map(
            (val) =>
              `<span style="position: relative;" class="span-item ${childNode.className}">${val}</span>`,
          );

        newContent += newSpanCollection.join('');

        const newContentBackgroundCollection = childNode.innerHTML
          .split('')
          .map((val) => `<span>${val}</span>`);

        newContentBackground += newContentBackgroundCollection.join('');
      }
    });

    const target = document.getElementById(id);

    if (target) {
      target.innerHTML = `
        <div style="color: #F2F2F2">${newContentBackground}</div>
        <div style="position: absolute; top: 0; left: 0;">${newContent}</div>
      `;

      const { lastElementChild } = target;

      Array.from(lastElementChild?.children || []).forEach((item, index) => {
        const span = item as HTMLSpanElement;
        span.style.opacity = '0';

        if (isEmojiContainer(span)) {
          span.style.transform = 'scale(0)';
        }

        if (status === 'ready') {
          return;
        }

        setTimeout(() => {
          span.style.opacity = '1';

          if (isEmojiContainer(span)) {
            Array.from(span.children).forEach((child) =>
              child.classList.add('play'),
            );
            span.style.transform = 'scale(1)';
          }
        }, index * 6);
      });
    }
  }, [id, status]);

  return (
    <Box
      xs={{
        position: 'relative',
        ...theme.text.medium600,
        '& span': {
          transition: theme.transitions.allEase,
        },
      }}
      m={theme.text.medium700}
      l={theme.text.medium800}
      xl={{
        ...theme.text.medium900,
        fontSize: 48,
      }}
      xxl={{
        ...theme.text.medium1000,
        fontSize: 58,
      }}
    >
      <span style={{ display: 'none' }} ref={ref}>
        {children}
      </span>

      <div style={{ position: 'relative' }} id={id} />
    </Box>
  );
};
