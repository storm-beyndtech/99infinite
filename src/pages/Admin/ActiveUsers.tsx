import EditUserModal from "@/components/EditUserModal";
import PageLoader from "@/components/PageLoader";
import { contextData } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { TfiSearch } from "react-icons/tfi";

export default function ActiveUsers() {
  const { user:admin } = contextData()
  const [users, setUsers] = useState<any>(null)
  const [filteredUsers, setFilteredUsers] = useState<any>(null)
  const [userData, setUserData] = useState(null)
  const [fetching, setFetching] = useState(true)
  const [reFetch, setReFetch] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalUsers, setTotalUsers] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const fetchUsers = async (page = 1, search = "") => {
    try {
      setFetching(true);
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        search: search
      });
      
      const res = await fetch(`${url}/users?${queryParams}`);
      const data = await res.json();

      if (res.ok) {
        // Filter out admin from the users list
        const filteredUsersList = data.users.filter((user:any) => user._id !== admin._id);
        setUsers(filteredUsersList)
        setFilteredUsers(filteredUsersList)
        setTotalPages(data.totalPages)
        setTotalUsers(data.totalUsers - 1) // Subtract 1 for admin
        setCurrentPage(page)
      }
      else throw new Error(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setFetching(false)
    }
  };

  useEffect(() => {
    fetchUsers(currentPage, searchTerm)
  }, [reFetch])

  const handleUserData = (userObj:any) => {
    setUserData(userObj)
    setReFetch(!reFetch)
  }

  const handleSearch = (search: string) => {
    setSearchTerm(search)
    setCurrentPage(1)
    fetchUsers(1, search)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    fetchUsers(page, searchTerm)
  }



  if(fetching) return <PageLoader />

  return (
    <>
    <div className="relative">

      <div className="py-3 bg-white dark:bg-transparent mb-5 flex justify-center">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <TfiSearch className="w53 h-3 text-gray-500 dark:text-gray-400"/>
            </div>
            <input onChange={(e) => handleSearch(e.target.value)} type="text" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
        </div>
      </div>

    
    <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="w-1/3 px-6 py-3">User</th>
              <th scope="col" className="w-1/6 px-6 py-3 hidden md:table-cell">Phone</th>
              <th scope="col" className="w-1/6 px-6 py-3 hidden lg:table-cell">Country</th>
              <th scope="col" className="w-1/4 px-6 py-3">Balance</th>
              <th scope="col" className="w-1/6 px-6 py-3">Action</th>
            </tr>
        </thead>

        <tbody>
            {filteredUsers && filteredUsers.map((user:any) => 
            <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="flex items-center px-5 py-3 text-gray-900 dark:text-white">
                  <img className="w-10 h-10 rounded-full bg-[#E2FFD7]/10" src={`https://robohash.org/${user?._id}`} alt="Avatar" />
                    <div className="ps-3 overflow-hidden">
                        <div className="text-xs font-semibold truncate">
                          {user.fullName}
                        </div>
                        <div className="text-xs font-medium text-gray-500 truncate">
                          {user.email}
                        </div>
                    </div>  
                </th>

                <td className="px-5 py-3 text-xs hidden md:table-cell truncate">
                    {user.phone || 'N/A'}
                </td>

                <td className="px-5 py-3 text-xs hidden lg:table-cell truncate">
                    {user.country}
                </td>

                <td className="px-4 py-3 text-xs font-semibold">
                    <div className="truncate">Deposit: ${user.deposit || 0}</div>
                    <div className="truncate">Interest: ${user.interest || 0}</div>
                </td>

                <td className="px-5 py-3">
                    <button onClick={() => handleUserData(user)} className="text-xs font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
            </tr>
              )}
        </tbody>
    </table>

    {/* Pagination */}
    {totalPages > 1 && (
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNum;
          if (totalPages <= 5) {
            pageNum = i + 1;
          } else if (currentPage <= 3) {
            pageNum = i + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNum = totalPages - 4 + i;
          } else {
            pageNum = currentPage - 2 + i;
          }
          
          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-3 py-2 text-sm leading-tight border ${
                currentPage === pageNum
                  ? 'text-blue-600 bg-blue-50 border-blue-300 dark:bg-gray-700 dark:border-gray-700 dark:text-white'
                  : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    )}

    {/* Show total count */}
    <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
      Showing {users?.length || 0} of {totalUsers} total users
    </div>

      {userData && <EditUserModal userData={userData} handleUserData={handleUserData}/>}
  </div>
    </>
  )
}
