import { IHeaderNavItem } from "../../header.types";
import { motion } from "framer-motion";

function HeaderNavItemDesktop({ name, index }: IHeaderNavItem) {
  return (
    <motion.p
      initial={{ opacity: 0, top: "-1rem" }}
      animate={{ opacity: 1, top: "0" }}
      transition={{
        duration: 0.3,
        delay: index * 0.2 + 1,
        bounce: 0.3,
        type: "spring",
      }}
      className="cursor-pointer relative  font-bold"
    >
      {name}
    </motion.p>
  );
}

export default HeaderNavItemDesktop;
