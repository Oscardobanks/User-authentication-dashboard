
const Table = () => {
  return (
    <div className="overflow-auto">
      <table className="w-full bg-white overflow-auto">
        <thead>
          <tr>
            <th className="py-2 px-3 text-left">Customer Name</th>
            <th className="py-2 px-3 text-left">Company</th>
            <th className="py-2 px-3 text-left">Phone Number</th>
            <th className="py-2 px-3 text-left">Email</th>
            <th className="py-2 px-3 text-left">Country</th>
            <th className="py-2 px-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-3">Jane Cooper</td>
            <td className="py-2 px-3">Microsoft</td>
            <td className="py-2 px-3">(225) 555-0118</td>
            <td className="py-2 px-3">jane@microsoft.com</td>
            <td className="py-2 px-3">United States</td>
            <td className="py-2 px-3">
              <span className="bg-green-300 font-bold text-green-800 py-1 px-4 rounded-sm border border-green-500 text-xs">Active</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">Floyd Miles</td>
            <td className="py-2 px-3">Yahoo</td>
            <td className="py-2 px-3">(205) 555-0100</td>
            <td className="py-2 px-3">floyd@yahoo.com</td>
            <td className="py-2 px-3">Kiribati</td>
            <td className="py-2 px-3">
              <span className="bg-red-300 font-bold text-red-800 py-1 px-3 rounded-sm border border-red-500 text-xs">Inactive</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">Ronald Richards</td>
            <td className="py-2 px-3">Adobe</td>
            <td className="py-2 px-3">(302) 555-0107</td>
            <td className="py-2 px-3">ronald@adobe.com</td>
            <td className="py-2 px-3">Israel</td>
            <td className="py-2 px-3">
              <span className="bg-red-300 font-bold text-red-800 py-1 px-3 rounded-sm border border-red-500 text-xs">Inactive</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">Marvin McKinney</td>
            <td className="py-2 px-3">Tesla</td>
            <td className="py-2 px-3">(252) 555-0126</td>
            <td className="py-2 px-3">marvin@tesla.com</td>
            <td className="py-2 px-3">Iran</td>
            <td className="py-2 px-3">
              <span className="bg-green-300 font-bold text-green-800 py-1 px-4 rounded-sm border border-green-500 text-xs">Active</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">Jerome Bell</td>
            <td className="py-2 px-3">Google</td>
            <td className="py-2 px-3">(629) 555-0129</td>
            <td className="py-2 px-3">jerome@google.com</td>
            <td className="py-2 px-3">Réunion</td>
            <td className="py-2 px-3">
              <span className="bg-green-300 font-bold text-green-800 py-1 px-4 rounded-sm border border-green-500 text-xs">Active</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">Kathryn Murphy</td>
            <td className="py-2 px-3">Microsoft</td>
            <td className="py-2 px-3">(406) 555-0120</td>
            <td className="py-2 px-3">kathryn@microsoft.com</td>
            <td className="py-2 px-3">Curaçao</td>
            <td className="py-2 px-3">
            <span className="bg-green-300 font-bold text-green-800 py-1 px-4 rounded-sm border border-green-500 text-xs">Active</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">Jacob Jones</td>
            <td className="py-2 px-3">Yahoo</td>
            <td className="py-2 px-3">(208) 555-0112</td>
            <td className="py-2 px-3">jacob@yahoo.com</td>
            <td className="py-2 px-3">Brazil</td>
            <td className="py-2 px-3">
              <span className="bg-green-300 font-bold text-green-800 py-1 px-4 rounded-sm border border-green-500 text-xs">Active</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-3">Darlene Robertson</td>
            <td className="py-2 px-3">Amazon</td>
            <td className="py-2 px-3">(331) 555-0143</td>
            <td className="py-2 px-3">darlene@amazon.com</td>
            <td className="py-2 px-3">Finland</td>
            <td className="py-2 px-3">
            <span className="bg-red-300 text-red-800 font-bold py-1 px-3 rounded-sm border border-red-500 text-xs">Inactive</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;