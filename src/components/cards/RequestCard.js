import React, { useState } from "react";
import moment from "moment/moment";
import { deleteLeaveRequest } from "../../Api/ApiIndex";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";

function isDateValid(startDate) {
  if (!startDate) {
    console.error("startDate is undefined or null.");
    return false;
  }
  const inputDate = new Date(startDate);
  if (isNaN(inputDate)) {
    console.error("Invalid startDate format.");
    return false;
  }
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  return inputDate >= currentDate;
}

function RequestCard({ data, reload }) {
  const [loading, setLoading] = useState(false);
  const [datePass, setDatePass] = useState(false);
  const toDeleteRequest = async (payload) => {
    // console.log(payload);
    setLoading(true);
    try {
      if (isDateValid(data?.startDate)) {
        const res = await deleteLeaveRequest(payload);
        if (res.status == 200) {
          // console.log(res?.data);
          toast.success("Request deleted successfully");
          reload();
        }
      } else {
        setDatePass(true);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Some thing went wrong!");
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
                {moment(data?.requestDate).format("DD/MM/YYYY")}
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
          <span className="me-1.5">
            From: {moment(data?.startDate).format("DD/MM/YYYY")}
          </span>{" "}
          <span>To: {moment(data?.endDate).format("DD/MM/YYYY")}</span>
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
        {datePass && (
          <small className="text-red-500 mt-3 text-xs">
           The request date has passed and cannot be deleted!
          </small>
        )}
      </div>
    </>
  );
}

export default RequestCard;
