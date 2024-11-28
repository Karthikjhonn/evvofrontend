import React, { useState } from "react";
import moment from "moment/moment";
import { deleteLeaveRequest } from "../../Api/ApiIndex";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";

const test = {
  userId: "6745edbb632998841574c86b",
  requestId: "6748338f27b4ad0ae120b4f6",
};

function RequestCard({ data, reload }) {
  const [loading, setLoading] = useState(false);
  const toDeleteRequest = async (payload) => {
    console.log(payload);
    setLoading(true);
    try {
      const res = await deleteLeaveRequest(payload);
      if (res.status == 200) {
        console.log(res?.data?.data);
        toast.success("Request deleted successfully");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Some thing went wrong!");
      setLoading(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="p-5 rounded-3xl border shadow-sm border-gray-200 flex flex-col ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-semibold capitalize">
              {data?.leaveType}
            </h2>
            <p className="text-xs font-normal text-black/50">
              Applied on:{" "}
              <span className="ms-1">
                {moment(data?.requestDate).format("DD/mm/yyyy")}
              </span>
            </p>
          </div>
          <p className="text-blue-400 text-xs font-normal capitalize bg-blue-100 rounded-full px-2.5 py-1.5">
            {data?.leaveDaysCount <= 9
              ? "0" + data?.leaveDaysCount
              : data?.leaveDaysCount}{" "}
            days
          </p>
        </div>
        <p className="text-sm mt-3 font-normal grow line-clamp-3">
          {data?.comments}
        </p>
        <p className="text-xs mt-1 capitalize font-medium">
          from: 18/11/2024 to: 20/11/2024
        </p>
        <div className="flex items-center flex-wrap gap-x-4 mt-5 ">
          <button
            className={`grow text-center px-2 py-2.5 text-sm capitalize rounded-full cursor-default ${
              data?.status == "approved"
                ? "text-green-500 bg-green-100"
                : "text-neutral-500 bg-neutral-100"
            }`}
          >
            {data?.status}
          </button>
          {data?.status !== "approved" && (
            <button
              className="grow text-center px-2 py-2.5 text-sm capitalize text-red-500 bg-red-100 rounded-full"
              disabled={loading}
              onClick={() => {
                toDeleteRequest({
                  userId: data?.userId,
                  requestId: data?._id,
                });
                reload();
              }}
            >
              {loading ? (
                <div className="min-w-12">
                  <Loader prop={"border-t-red-500 border-r-red-500"} />
                </div>
              ) : (
                "delete"
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default RequestCard;
