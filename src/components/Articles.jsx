import React from "react";
import { dummyArticles } from "../services/dummy/data-dummy/dataDummy";

export default function Articles() {
  const articleData = dummyArticles;

  return (
    <div>
      <div className="pl-4 pt-2 pb-2 font-bold text-xl">Artikel</div>
      <div className="px-4">
        {articleData &&
          articleData.map((article, index) => (
            <div key={index}>
              <div className="pt-4 pb-4 flex items-center" onClick={() => {}}>
                <img
                  alt={"test article"}
                  src={article.image}
                  className="w-[68px] h-[68px] rounded-lg object-cover"
                />
                <p className="pl-2 font-semibold text-xl">{article.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
