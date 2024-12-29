import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { HiHome } from "react-icons/hi2";
import { TbChevronRight } from "react-icons/tb";
import HomeTabs from "../../components/tabs/HomeTabs";
import LeaveChart from "../../components/charts/LeaveChart";
import BasicTable from "../../components/table/Table";
import Button from "../../components/button/Button";
import LeaveRequestForm from "../../components/form/LeaveRequestForm";
import MyModal from "../../components/dialogmodal/MyModal";
import { getUser } from "../../Api/ApiIndex";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../components/loader/Loader";
function Home() {
  const { user, setUser } = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const getUserDetails = useCallback(async () => {
    try {
      const res = await getUser();
      if (res.status === 200) {
        // console.log(res?.data?.data);
        setUser(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Some thing went wrong!");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserDetails();
  }, [modalIsOpen]);
  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center w-full h-dvh">
          <Loader />
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="flex items-center gap-1">
        <HiHome className="text-base text-gray-400" />
        <TbChevronRight className="text-base text-black" />
        <button className="px-2 py-1 rounded-lg text-gray-400 bg-gray-50 text-xs">
          Home
        </button>
      </div>
      <main className="mt-6 py-2">
        <aside className="mb-10">
          <h1 className="text-lg lg:text-2xl font-medium mb-1">
            Hello, {user?.user?.name} 👋
          </h1>
          <p className="text-sm font-normal text-black/50">
            Here’s an overview of your current leave balance
          </p>
        </aside>
        <section className="grid md:grid-cols-3 gap-5 mb-24">
          <section className="grid md:grid-cols-2 gap-5 col-span-2">
            <HomeTabs
              heading={user?.leaveStatus?.sickLeave}
              description={"Sick Leave"}
            />
            <HomeTabs
              heading={user?.leaveStatus?.casualLeave}
              description={"Casual Leave"}
            />
            <HomeTabs
              heading={user?.leaveStatus?.earnedLeave}
              description={"Earned Leave"}
            />
            <HomeTabs
              heading={user?.leaveStatus?.totalLeave}
              description={"Total Leave"}
            />
          </section>
          {user?.leaveStatus && <LeaveChart data={user?.leaveStatus} />}
        </section>
        <section className="">
          <div className="flex justify-between mb-4">
            <h1 className="text-base font-medium ">My dashboard</h1>
            <div>
              <Button name="Apply Leave" onclick={openModal} disable={false} />
            </div>
          </div>
          <BasicTable user={user} />
        </section>
        <MyModal closeModal={closeModal} modalIsOpen={modalIsOpen}>
          <LeaveRequestForm closeModal={closeModal} />
        </MyModal>
      </main>
    </Layout>
  );
}

export default Home;
