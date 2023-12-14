import React from "react";
import SimpleLayout from "../components/layouts/SimpleLayout";
import { useNavigate } from "react-router-dom";

export default function RecentViewedPage() {
  const navigate = useNavigate();

  const histories = JSON.parse(localStorage.getItem("recentViewed") || "[]");

  if (histories && histories.length > 0) {
    return (
      <SimpleLayout text={"Recent Viewed"}>
        <div className="pt-2 px-4">
          {histories.map((history, index) => (
            <div key={index}>
              <div
                className="border-b-[1px] border-gray-600 mt-4 pb-4 flex items-center"
                onClick={() => navigate("/detail-item")}
              >
                <img
                  alt={history.name}
                  src={history.image}
                  className="w-[68px] h-[68px] rounded-lg object-cover"
                />
                <p className="pl-2">{history.name}</p>
              </div>
            </div>
          ))}
        </div>
      </SimpleLayout>
    );
  } else {
    return <div className="text-center">No History</div>;
  }
}
