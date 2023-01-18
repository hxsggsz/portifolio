import { ReactNode, useRef } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Slider } from ".";

interface SliderProps {
  children: ReactNode;
  baseVelocity: number;
}

export const UseSlider = ({ children, baseVelocity = 100 }: SliderProps) => {
  const baseX = useMotionValue(0);
  const smoothVelocity = useSpring(100, {
    damping: 50,
    stiffness: 400
  });

  const velocityFactor = useTransform(smoothVelocity, [1000, 2000], [0, 5], {
    clamp: true
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(1000, -45, v)}%`);

  const directionFactor = useRef<number>(0);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -10;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <Slider className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
      </motion.div>
    </Slider>
  );
}