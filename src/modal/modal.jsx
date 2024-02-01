import React from "react";
import "../App.css"

function Modal({ isOpen, onClose,  children}) {
    const onWrapperClik = (event) => {
        if (
          event.target.classList.contains(
            "modal_wrapper"
            //absolute left-0 top-0 flex justify-center items-center w-full min-h-full/
          )
        )
          onClose();
      };
  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0  w-full h-full bg-black bg-opacity-50 overflow-hidden overflow-y-auto z-50 flex flex-col gap-4"  >
          <div className="modal_wrapper" onClick={onWrapperClik}>
            <div
              className="relative m-5 w-full max-w-[700px] rounded-lg bg-white p-5 pt-10 translate-y-[-50px]"
              
            >
              <button
                className="absolute top-1 right-4 w-8 h-8  p-1 rounded-lg bg-slate-300 text-black opacity-100"
                onClick={() => onClose()}
              >
                X
              </button>
              <div className="box">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;





 



// // Modal.js
// import React from "react";

// function Modal({ isOpen, onClose, children }) {
//   return (
//     <>
//       {isOpen && (
//         <div className="absolute left-0 top-0 flex justify-center items-center w-full min-h-full">
//           <div className="relative m-5 w-full max-w-[700px] rounded-lg bg-white p-5 pt-10 translate-y-[-50px]">
//             <button
//               className="absolute top-4 right-4 w-8 h-8 p-1 text-black opacity-100"
//               onClick={() => onClose()}
//             >
//               X
//             </button>
//             <div className="box">{children}</div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Modal;
