import React, { forwardRef } from "react";
import styles from "./Button.module.scss";

export const Button = forwardRef(({ children, ...props }, ref) => {
  return (
    <button className={styles.button} {...props} ref={ref}>
      {children}
    </button>
  );
});
