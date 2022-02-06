import React from "react";

const classes = {
  mainDiv: {
    lg: "relative flex self-stretch lg:mx-[37px]",
    sm: "relative hidden lg:block",
  },
  input: {
    lg: "border border-white/10 rounded bg-white/5 p-4 text-white/40 text-15 grow",
    sm: "w-[280px] rounded bg-white/10 py-[6px] px-[12px] text-white/40 text-[15px]",
  },
};

export default function SearchBox({ variant = "lg" }) {
  return (
    <div className={classes.mainDiv[variant]}>
      <input
        type="text"
        className={classes.input[variant]}
        placeholder="Search..."
      />
      <div className="absolute top-0 bottom-0 right-[16px] hidden lg:flex items-center pointer-events-none space-x-[6px] text-white/60 text-[11px] font-medium">
        <span className="flex items-center justify-center w-[20px] h-[20px] rounded-sm bg-white/10">
          ⌘
        </span>
        <span className="flex items-center justify-center w-[20px] h-[20px] rounded-sm bg-white/10">
          K
        </span>
      </div>
    </div>
  );
}
