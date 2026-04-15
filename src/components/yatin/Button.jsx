import React from 'react';

function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-md
        border
        border-slate-300
        bg-slate-50
        px-4
        py-2
        text-sm
        font-medium
        text-slate-900
        hover:bg-slate-100
        transition
      "
    >
      {label}
    </button>
  );
}

export default Button;