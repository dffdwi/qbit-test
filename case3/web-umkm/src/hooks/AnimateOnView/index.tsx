import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef, ReactNode } from "react";

interface FadeInProps {
  direction: "up" | "down" | "left" | "right";
  delay: number;
}

interface AnimateOnViewProps extends FadeInProps {
  children: ReactNode;
}

export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const AnimateOnView: React.FC<AnimateOnViewProps> = ({
  children,
  direction,
  delay,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false); 

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setShouldAnimate(true);
      setHasAnimated(true); 
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "show" : "hidden"}
      variants={fadeIn(direction, delay)}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnView;
