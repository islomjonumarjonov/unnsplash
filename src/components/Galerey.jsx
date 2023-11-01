import React from "react";

function Galerey({ data: { results } }) {
  // console.log(results);
  return (
    <ul className="galerey-ul">
      {results.map((image) => {
        return (
          <li key={image.id}>
            <img src={image.urls.regular} alt="" width={300} height={300} />
          </li>
        );
      })}
    </ul>
  );
}

export default Galerey;
