"use client";

import { useSnackbar } from "notistack";

export function ToastButton({ children }: { children: React.ReactNode }) {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <button
      className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      onClick={() => {
        enqueueSnackbar("Hello from notistack!", {
          variant: "success",
        });
      }}
    >
      {children}
    </button>
  );
}
