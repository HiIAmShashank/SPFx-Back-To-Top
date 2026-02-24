import * as React from 'react';
import { act } from 'react-dom/test-utils';
import * as ReactDOM from 'react-dom';
import BackToTop from './BackToTop';

// jsdom does not implement scrolling, so we stub window.scrollY.
function setScrollY(value: number): void {
  Object.defineProperty(window, 'scrollY', {
    value,
    writable: true,
    configurable: true,
  });
}

describe('BackToTop', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    setScrollY(0);
  });

  afterEach(() => {
    act(() => {
      ReactDOM.unmountComponentAtNode(container);
    });
    document.body.removeChild(container);
  });

  it('hides the button on initial render (scrollY = 0)', () => {
    act(() => {
      ReactDOM.render(React.createElement(BackToTop), container);
    });
    const wrapper = container.querySelector('[data-testid="back-to-top"]');
    expect(wrapper).toBeTruthy();
    expect(wrapper?.getAttribute('aria-hidden')).toBe('true');
  });

  it('shows the button after scrolling past 300px', () => {
    act(() => {
      ReactDOM.render(React.createElement(BackToTop), container);
    });
    setScrollY(301);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    const wrapper = container.querySelector('[data-testid="back-to-top"]');
    expect(wrapper?.getAttribute('aria-hidden')).toBe('false');
  });

  it('keeps the button hidden when exactly at the 300px threshold', () => {
    act(() => {
      ReactDOM.render(React.createElement(BackToTop), container);
    });
    setScrollY(300);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    const wrapper = container.querySelector('[data-testid="back-to-top"]');
    expect(wrapper?.getAttribute('aria-hidden')).toBe('true');
  });

  it('hides the button again when scrolled back above threshold', () => {
    setScrollY(301);
    act(() => {
      ReactDOM.render(React.createElement(BackToTop), container);
    });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    setScrollY(0);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    const wrapper = container.querySelector('[data-testid="back-to-top"]');
    expect(wrapper?.getAttribute('aria-hidden')).toBe('true');
  });

  it('calls window.scrollTo with smooth behavior on button click', () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
    setScrollY(301);
    act(() => {
      ReactDOM.render(React.createElement(BackToTop), container);
    });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    const button = container.querySelector('button');
    act(() => {
      button?.click();
    });
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    scrollToSpy.mockRestore();
  });

  it('removes the scroll listener when the component unmounts', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener');
    act(() => {
      ReactDOM.render(React.createElement(BackToTop), container);
    });
    removeSpy.mockClear(); // only watch calls made during unmount, not during render
    act(() => {
      ReactDOM.unmountComponentAtNode(container);
    });
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    removeSpy.mockRestore();
  });
});
