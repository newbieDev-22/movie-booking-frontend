import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ width = 30, title, children, open, onClose }) {
  useEffect(() => {
    const handleEscPress = (e) => {
      if (e.keyCode === 27) {
        onClose?.();
      }
    };
    document.body.addEventListener("keydown", handleEscPress);
    return () => document.body.removeEventListener("keydown", handleEscPress);
  }, [onClose]);

  return (
    <>
      {open
        ? createPortal(
            <>
              <div className="fixed inset-0 bg-[#121212]/40 z-30"></div>
              <div className="fixed inset-0 z-40" onClick={onClose}>
                <div className="flex justify-center items-center min-h-screen">
                  <div
                    className="bg-[#121212] rounded-lg shadow-lg"
                    style={{ width: `${width}rem` }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-center p-4">
                      <h5 className="text-white flex-1 text-4xl font-medium text-center mx-2 p-2">
                        {title}
                      </h5>
                      <button className="text-lg text-white" onClick={onClose}>
                        &#10005;
                      </button>
                    </div>
                    <div className="px-12 py-6">{children}</div>
                  </div>
                </div>
              </div>
            </>,
            document.getElementById("modal")
          )
        : null}
    </>
  );
}
