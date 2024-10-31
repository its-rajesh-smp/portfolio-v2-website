import { motion } from "framer-motion";

function HeaderBrandNameDesktop() {
  let string = "Rajesh SMP";
  return (
    <div>
      <motion.h1
        initial={{ fontSize: "16px" }}
        animate={{ fontSize: "26px" }}
        transition={{ duration: 0.3, delay: 5, bounce: 0.3, type: "spring" }}
      >
        {string.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, top: "-1rem" }}
            animate={{ opacity: 1, top: "0" }}
            transition={{
              duration: 0.3,
              delay: index * 0.3 + 2,
              bounce: 0.3,
              type: "spring",
            }}
            className="cursor-pointer relative  font-bold"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default HeaderBrandNameDesktop;
