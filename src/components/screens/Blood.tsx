import Navbar from "../shared/Nav"

 
function Blood() {
  return (
    <>
     <Navbar /><section className="mb-8 p-4">
<h2 className="text-xl font-semibold mb-2">Blood Bank Information</h2>
<div className="grid grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Total Donors</h3>
        <p className="text-gray-700">645</p> 
    </div>

    <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Total Receivers</h3>
        <p className="text-gray-700">422</p> 
    </div>

    <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Total Blood Bags</h3>
        <p className="text-gray-700">645</p>
    </div>
</div>
<h3 className="text-xl font-semibold my-2">Category Wise Doners </h3>
<div className="grid grid-cols-7 gap-4">
    <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">A+</h3>
        <p className="text-gray-700">656</p>
    </div>
    <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">B+</h3>
        <p className="text-gray-700">245</p> 
    </div>
    <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">AB+</h3>
        <p className="text-gray-700">23</p> 
    </div>
    <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">O+</h3>
        <p className="text-gray-700">64</p> 
    </div>
    <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">A-</h3>
        <p className="text-gray-700">45</p> 
    </div>
    <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">B-</h3>
        <p className="text-gray-700">43</p> 
    </div>
    <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">AB-</h3>
        <p className="text-gray-700">68</p> 
    </div>
</div>

<h3 className="text-xl font-semibold my-2">Donor List By City</h3>

<div className="overflow-x-auto">
    <table className="w-full text-center table-auto border-collapse border border-gray-400">
        <thead>
            <tr>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">Blood Bank Center Name</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">Contact</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">City</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">A+</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">B+</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">AB+</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">O+</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">A-</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">B-</th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">AB-</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="px-4 py-2 border border-gray-400">Dhaka Medical College Blood Bank</td>
                <td className="px-4 py-2 border border-gray-400">0190304371</td>
                <td className="px-4 py-2 border border-gray-400">Dhaka</td>
                <td className="px-4 py-2 border border-gray-400">10</td>
                <td className="px-4 py-2 border border-gray-400">20</td>
                <td className="px-4 py-2 border border-gray-400">5</td>
                <td className="px-4 py-2 border border-gray-400">15</td>
                <td className="px-4 py-2 border border-gray-400">7</td>
                <td className="px-4 py-2 border border-gray-400">3</td>
                <td className="px-4 py-2 border border-gray-400">1</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border border-gray-400">Sirajganj Medical College Blood Bank</td>
                <td className="px-4 py-2 border border-gray-400">0123456789</td>
                <td className="px-4 py-2 border border-gray-400">Sirajganj</td>
                <td className="px-4 py-2 border border-gray-400">12</td>
                <td className="px-4 py-2 border border-gray-400">18</td>
                <td className="px-4 py-2 border border-gray-400">8</td>
                <td className="px-4 py-2 border border-gray-400">20</td>
                <td className="px-4 py-2 border border-gray-400">6</td>
                <td className="px-4 py-2 border border-gray-400">4</td>
                <td className="px-4 py-2 border border-gray-400">0</td>
            </tr>
        </tbody>
    </table>
</div>


</section>

     
</>
)
}

export default Blood