import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DEPARTMENTS } from "../assets/assets";
import { Loader2Icon } from "lucide-react";

const inputStyle =
  "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500";

const EmployeeForm = ({ initialData, onSuccess, onCancel }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const isEditMode = !!initialData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      // Convert numeric fields
      data.basicSalary = Number(data.basicSalary);
      data.allowances = Number(data.allowances);
      data.deductions = Number(data.deductions);

      const res = await fetch(
        isEditMode
          ? `/api/employees/${initialData._id}`
          : `/api/employees`,
        {
          method: isEditMode ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to save employee");
      }

      // ✅ Callback (refresh parent)
      if (onSuccess) onSuccess();

      // ✅ Redirect
      navigate("/employees");

    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl animate-fade-in"
    >
      {/* Personal Info */}
      <div className="card p-5 sm:p-6">
        <h3 className="font-medium mb-6 pb-4 border-b">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <label className="block mb-2">First Name</label>
            <input
              name="firstName"
              required
              defaultValue={initialData?.firstName}
              className={inputStyle}
            />
          </div>

          <div>
            <label className="block mb-2">Last Name</label>
            <input
              name="lastName"
              required
              defaultValue={initialData?.lastName}
              className={inputStyle}
            />
          </div>

          <div>
            <label className="block mb-2">Phone</label>
            <input
              name="phone"
              required
              defaultValue={initialData?.phone}
              className={inputStyle}
            />
          </div>

          <div>
            <label className="block mb-2">Join Date</label>
            <input
              type="date"
              name="joinDate"
              required
              defaultValue={
                initialData?.joinDate
                  ? new Date(initialData.joinDate)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
              className={inputStyle}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2">Bio (Optional)</label>
            <textarea
              name="bio"
              rows={3}
              defaultValue={initialData?.bio}
              className={`${inputStyle} resize-none`}
              placeholder="Brief description..."
            />
          </div>
        </div>
      </div>

      {/* Employment */}
      <div className="card p-5 sm:p-6">
        <h3 className="font-medium mb-6 pb-4 border-b">
          Employment Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <label className="block mb-2">Department</label>
            <select
              name="department"
              defaultValue={initialData?.department || ""}
              className={inputStyle}
            >
              <option value="">Select Department</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">Position</label>
            <input
              name="position"
              required
              defaultValue={initialData?.position}
              className={inputStyle}
            />
          </div>

          <div>
            <label className="block mb-2">Basic Salary</label>
            <input
              type="number"
              name="basicSalary"
              required
              defaultValue={initialData?.basicSalary || 0}
              className={inputStyle}
            />
          </div>

          <div>
            <label className="block mb-2">Allowances</label>
            <input
              type="number"
              name="allowances"
              required
              defaultValue={initialData?.allowances || 0}
              className={inputStyle}
            />
          </div>

          <div>
            <label className="block mb-2">Deductions</label>
            <input
              type="number"
              name="deductions"
              required
              defaultValue={initialData?.deductions || 0}
              className={inputStyle}
            />
          </div>

          {isEditMode && (
            <div>
              <label className="block mb-2">Status</label>
              <select
                name="employmentStatus"
                defaultValue={
                  initialData?.employmentStatus || "ACTIVE"
                }
                className={inputStyle}
              >
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Account */}
      <div className="card p-5 sm:p-6">
        <h3 className="font-medium mb-6 pb-4 border-b">
          Account Setup
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="sm:col-span-2">
            <label className="block mb-2">Work Email</label>
            <input
              type="email"
              name="email"
              required
              defaultValue={initialData?.email}
              className={inputStyle}
            />
          </div>

          <div>
            <label className="block mb-2">
              {isEditMode
                ? "Change Password (Optional)"
                : "Temporary Password"}
            </label>
            <input
              type="password"
              name="password"
              required={!isEditMode}
              className={inputStyle}
              placeholder={
                isEditMode
                  ? "Leave blank to keep current"
                  : ""
              }
            />
          </div>

          <div>
            <label className="block mb-2">System Role</label>
            <select
              name="role"
              defaultValue={
                initialData?.user?.role || "EMPLOYEE"
              }
              className={inputStyle}
            >
              <option value="EMPLOYEE">Employee</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
        <button
          type="button"
          onClick={() =>
            onCancel ? onCancel() : navigate(-1)
          }
          className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 rounded-lg text-white bg-linear-to-r from-purple-500 to-indigo-600 flex items-center justify-center"
        >
          {loading && (
            <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
          )}
          {loading
            ? "Processing..."
            : isEditMode
            ? "Update Employee"
            : "Create Employee"}
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;