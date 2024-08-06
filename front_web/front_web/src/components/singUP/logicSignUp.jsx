import ImgLogo from "../../assets/img/logo.png";
import { motion } from "framer-motion";

export const Img1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <img src={ImgLogo} style={LogoStyle} />
    </motion.div>
  );
};
