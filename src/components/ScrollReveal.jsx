import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * ScrollReveal - Only animates when scrolling DOWN into view.
 * When scrolling UP, elements appear instantly without animation.
 */
const ScrollReveal = ({ 
  children, 
  className = '', 
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.7 },
  viewportAmount = 0.2,
  ...props 
}) => {
  const ref = useRef(null);
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { amount: viewportAmount });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isInView && scrollDirection === 'down') {
      setHasAnimated(true);
    }
    if (!isInView) {
      setHasAnimated(false);
    }
  }, [isInView, scrollDirection]);

  // If scrolling up and element is in view, show immediately (no animation)
  const shouldAnimate = isInView && scrollDirection === 'down';
  const showInstantly = isInView && scrollDirection === 'up';

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={
        shouldAnimate || hasAnimated
          ? animate 
          : showInstantly 
            ? animate 
            : initial
      }
      transition={
        showInstantly && !hasAnimated
          ? { duration: 0 } 
          : transition
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
