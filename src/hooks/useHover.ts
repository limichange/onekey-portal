/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { HTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';

interface HoverEvent {
  type: 'hoverstart' | 'hoverend';
  pointerType: 'mouse' | 'pen' | 'touch';
  target: HTMLElement;
}

interface Props {
  onHoverStart?: (e: HoverEvent) => void;
  onHoverEnd?: (e: HoverEvent) => void;
  onHoverChange?: (isHovering: boolean) => void;
  isDisabled?: boolean;
  timeout?: number;
}

export function useHover(props: Props = {}) {
  const {
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled = false,
    timeout = 300,
  } = props;
  const [isHovered, setHovered] = useState(false);

  const timer = useRef<NodeJS.Timeout | null>(null);
  const state = useRef({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: '',
    target: null,
    timeout,
  }).current;

  const { hoverProps, triggerHoverEnd } = useMemo(() => {
    const triggerHoverStart = (event: any, pointerType: any) => {
      state.pointerType = pointerType;

      if (
        isDisabled ||
        pointerType === 'touch' ||
        state.isHovered ||
        !event.currentTarget.contains(event.target)
      ) {
        return;
      }

      state.isHovered = true;
      const target = event.currentTarget;
      state.target = target;

      if (onHoverStart) {
        onHoverStart({
          type: 'hoverstart',
          target,
          pointerType,
        });
      }

      if (onHoverChange) {
        onHoverChange(true);
      }

      setHovered(true);
    };

    const triggerHoverEnd = (event: any, pointerType: any) => {
      state.pointerType = '';
      state.target = null;

      if (pointerType === 'touch' || !state.isHovered) {
        return;
      }

      state.isHovered = false;
      const target = event.currentTarget;
      if (onHoverEnd) {
        onHoverEnd({
          type: 'hoverend',
          target,
          pointerType,
        });
      }

      if (onHoverChange) {
        onHoverChange(false);
      }

      setHovered(false);
    };

    const hoverProps: HTMLAttributes<HTMLElement> = {};

    if (typeof PointerEvent !== 'undefined') {
      hoverProps.onPointerEnter = (e) => {
        timer.current && clearTimeout(timer.current);

        triggerHoverStart(e, e.pointerType);
      };

      hoverProps.onPointerLeave = (e) => {
        if (!isDisabled && e.currentTarget.contains(e.target as HTMLElement)) {
          timer.current = setTimeout(() => {
            triggerHoverEnd(e, e.pointerType);
          }, timeout);
        }
      };
    } else {
      hoverProps.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };

      hoverProps.onMouseEnter = (e) => {
        if (!state.ignoreEmulatedMouseEvents) {
          triggerHoverStart(e, 'mouse');
        }

        state.ignoreEmulatedMouseEvents = false;
      };

      hoverProps.onMouseLeave = (e) => {
        if (!isDisabled && e.currentTarget.contains(e.target as HTMLElement)) {
          triggerHoverEnd(e, 'mouse');
        }
      };
    }
    return { hoverProps, triggerHoverEnd };
  }, [state, isDisabled, onHoverStart, onHoverChange, onHoverEnd, timeout]);

  useEffect(() => {
    if (isDisabled) {
      triggerHoverEnd({ currentTarget: state.target }, state.pointerType);
    }
  }, [isDisabled, state.pointerType, state.target, triggerHoverEnd]);

  return {
    hoverProps,
    isHovered,
  };
}
