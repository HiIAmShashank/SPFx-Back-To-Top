import * as React from 'react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { Icon } from '@fluentui/react';
import styles from './BackToTop.module.scss';
import type { IBackToTopProps } from './IBackToTopProps';

const SCROLL_THRESHOLD = 300;

function getScrollableParent(element: HTMLElement | null): HTMLElement | Window {
  let current = element;
  while (current) {
    if (current.getAttribute('data-is-scrollable') === 'true') {
      return current;
    }
    current = current.parentElement;
  }
  return window;
}

function getScrollTop(target: HTMLElement | Window): number {
  return target === window ? window.scrollY : (target as HTMLElement).scrollTop;
}

const BackToTop: React.FC<IBackToTopProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTargetRef = useRef<HTMLElement | Window>(window);

  useEffect(() => {
    scrollTargetRef.current = getScrollableParent(containerRef.current);

    const handleScroll = (): void => {
      setIsVisible(getScrollTop(scrollTargetRef.current) > SCROLL_THRESHOLD);
    };

    handleScroll(); // sync with current scroll position on mount
    scrollTargetRef.current.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      scrollTargetRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = useCallback((): void => {
    scrollTargetRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      ref={containerRef}
      data-testid="back-to-top"
      className={`${styles.fab} ${isVisible ? styles.visible : ''}`}
      aria-hidden={!isVisible}
    >
      <button
        className={styles.fabButton}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        tabIndex={isVisible ? 0 : -1}
      >
        <Icon iconName="ChevronUp" className={styles.icon} />
      </button>
    </div>
  );
};

export default BackToTop;
