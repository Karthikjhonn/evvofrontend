import React from "react";

function FormError({ error }) {
  //   if (error) {
  //     return <p className={`text-xs text-red-500 mt-1`}>{error}</p>;
  //   }
  return (
    <p className={`text-xs text-red-500 mt-1 ${error ? "" : "invisible"}`}>
      {error || "-"}
    </p>
  );
}

export default FormError;
