import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer circle - follows with delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        style={{
          width: '40px',
          height: '40px',
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-white opacity-50" />
      </motion.div>

      {/* Inner dot - follows immediately */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
        style={{
          width: '8px',
          height: '8px',
        }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>

      {/* Hover state - text indicator */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          style={{
            width: '60px',
            height: '60px',
          }}
        >
          <div className="w-full h-full rounded-full bg-white opacity-20" />
        </motion.div>
      )}
    </>
  );
}
