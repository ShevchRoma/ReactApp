import React from "react";

import "./NotFoundBlock.module.scss";

export const NotFoundBlock: React.FC = () => {
  return (
    <div className="not-found">
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className="not-found__description">
        К сожалени данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
