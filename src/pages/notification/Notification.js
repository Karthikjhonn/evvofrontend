import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { HiMegaphone } from "react-icons/hi2";
import { TbChevronRight } from "react-icons/tb";
import RequestCard from "../../components/cards/RequestCard";
import { getUser } from "../../Api/ApiIndex";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import multitaskingSvg from "../../asset/image/undraw_multitasking_re_ffpb.svg";


function Notification() {
  const { user, setUser } = useAuth();
  const [reload, setReload] = useState(true);
  const reloaded = () => {
    setReload(!reload);
  };
  const getUserDetails = async () => {
    try {
      const res = await getUser();
      if (res.status == 200) {
        // console.log(res?.data?.data);
        setUser(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Some thing went wrong!");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [reload]);

  return (
    <Layout>
      <div className="flex items-center gap-1">
        <div className="relative">
          <HiMegaphone className="text-base text-gray-400" />
          <span className="size-1 absolute -top-px -right-px rounded-full bg-red-500"></span>
        </div>
        <TbChevronRight className="text-base text-black" />
        <button className="px-2 py-1 rounded-lg text-gray-400 bg-gray-50 text-xs">
          Notifications
        </button>
      </div>
      <main className="mt-6 py-2">
        <h1 className="text-base font-medium mb-8">Recent Request</h1>
        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {user?.LeaveHistory.length == 0 ? (
            <div className="md:col-span-2 xl:col-span-3 my-10">
              <img src={multitaskingSvg} alt=" No request found Illustration" loading="lazy"  className="object-cover block max-w-xs mx-auto" />
              <p className=" text-center text-black/50 text-sm font-normal tracking-wide mt-6">
                No request found!
              </p>
            </div>
          ) : (
            user?.LeaveHistory?.map((data) => (
              <RequestCard data={data} reload={reloaded} key={data?._id} />
            ))
          )}
          {/* <div className="bg-gray-200 h-56 rounded-2xl animate-pulse"></div> */}
        </section>
      </main>
    </Layout>
  );
}

export default Notification;
