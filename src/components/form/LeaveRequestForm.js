import React, { useState } from "react";
import FormError from "../error/FormError";
import { useFormik } from "formik";
import { leaveRequestValidation } from "../../constants/validation/Validation";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";
import moment from "moment/moment";
import { leaveRequest } from "../../Api/ApiIndex";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";

const options = [
  { value: "sickLeave", label: "Sick Leave" },
  { value: "earnedLeave", label: "Earned Leave" },
  { value: "casualLeave", label: "Casual Leave" },
];

function LeaveRequestForm({closeModal}) {
  const [loading, setLoading] = useState(false);
  const renderDayContents = (day, date) => {
    if (!date) return <span>{day}</span>;
    const tooltipText = `Tooltip for date: ${date}`;
    return <span title={tooltipText}>{day}</span>;
  };

  const formik = useFormik({
    initialValues: {
      leaveType: "",
      startDate: null,
      endDate: null,
      comments: "",
    },
    validationSchema: leaveRequestValidation,
    onSubmit: (values) => {
      console.log(values);
      const { leaveType, startDate, endDate, comments } = values;
      const payload = {
        userId: localStorage.getItem("userId"),
        leaveType: leaveType,
        startDate: startDate,
        endDate: endDate,
        comments: comments,
      };
      toRequestLeave(payload);
    },
  });
  const toRequestLeave = async (payload) => {
    setLoading(true);
    try {
      const res = await leaveRequest(payload);
      if (res.status == 200) {
        console.log(res?.data?.message);
        toast.success(res?.data?.message || "Request sent successfully");
        setLoading(false);
        closeModal()
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Some thing went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      className="w-full max-w-md p-6 bg-white shadow-sm rounded-lg mx-auto"
      onSubmit={formik.handleSubmit}
    >
      <h2 className="text-xl font-bold mb-4">Leave Request</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Leave Type
        </label>
        <Select
          options={options}
          id="leaveType"
          name="leaveType"
          value={options.find(
            (option) => option.value === formik.values.leaveType
          )}
          onChange={(selectedOption) =>
            formik.setFieldValue("leaveType", selectedOption.value)
          }
          onBlur={formik.handleBlur}
        />
        <FormError
          error={formik.touched.leaveType && formik.errors.leaveType}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Start Date
        </label>
        <DatePicker
          selected={formik.values.startDate}
          onChange={(date) =>
            formik.setFieldValue("startDate", moment(date).format("YYYY-MM-DD"))
          }
          onBlur={formik.handleBlur("startDate")}
          renderDayContents={renderDayContents}
          minDate={new Date()}
          dateFormat="dd-MM-yyyy"
          className="border rounded-lg p-2 !w-full"
          placeholderText="Select start date"
        />
        <FormError
          error={formik.touched.startDate && formik.errors.startDate}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          End Date
        </label>
        <DatePicker
          selected={formik.values.endDate}
          onChange={(date) =>
            formik.setFieldValue("endDate", moment(date).format("YYYY-MM-DD"))
          }
          onBlur={formik.handleBlur("endDate")}
          renderDayContents={renderDayContents}
          minDate={formik.values.startDate || new Date()}
          dateFormat="dd-MM-yyyy"
          className="border rounded-lg p-2 !w-full"
          placeholderText="Select end date"
        />
        <FormError error={formik.touched.endDate && formik.errors.endDate} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          value={formik.values.comments}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-3 py-2 border rounded-lg text-sm"
          rows="4"
        />
        <FormError error={formik.touched.comments && formik.errors.comments} />
      </div>

      <Button type="submit" name={loading?<Loader/>:"Submit Leave Request"} disable={loading} />
    </form>
  );
}

export default LeaveRequestForm;
