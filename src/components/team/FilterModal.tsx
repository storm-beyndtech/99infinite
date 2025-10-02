import React, { useState } from 'react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: { locations: string[]; departments: string[] };
  onFiltersChange: (filters: { locations: string[]; departments: string[] }) => void;
}

const locations = ["Los Angeles", "New York", "Dallas", "Atlanta", "Detroit", "Seattle"];
const departments = [
  "Administration",
  "Capital Markets Advisors",
  "Capital Markets Support Staff",
  "Executive Committee",
  "Investments",
  "Support Staff",
  "Technology",
];

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, filters, onFiltersChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  if (!isOpen) return null;

  const handleLocationChange = (location: string) => {
    const newLocations = localFilters.locations.includes(location)
      ? localFilters.locations.filter((l) => l !== location)
      : [...localFilters.locations, location];

    setLocalFilters({ ...localFilters, locations: newLocations });
  };

  const handleDepartmentChange = (department: string) => {
    const newDepartments = localFilters.departments.includes(department)
      ? localFilters.departments.filter((d) => d !== department)
      : [...localFilters.departments, department];

    setLocalFilters({ ...localFilters, departments: newDepartments });
  };

  const handleSave = () => {
    onFiltersChange(localFilters);
    onClose();
  };

  const handleCancel = () => {
    setLocalFilters(filters);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Filters</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Locations */}
          <div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Locations</h3>
            <div className="space-y-3">
              {locations.map((location) => (
                <label key={location} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={localFilters.locations.includes(location)}
                    onChange={() => handleLocationChange(location)}
                    className="w-4 h-4 text-cyan-600 rounded"
                  />
                  <span className="text-gray-700">{location}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Departments</h3>
            <div className="space-y-3">
              {departments.map((department) => (
                <label key={department} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={localFilters.departments.includes(department)}
                    onChange={() => handleDepartmentChange(department)}
                    className="w-4 h-4 text-cyan-600 rounded"
                  />
                  <span className="text-gray-700">{department}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-8">
          <button
            onClick={handleCancel}
            className="px-8 py-2 border border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;