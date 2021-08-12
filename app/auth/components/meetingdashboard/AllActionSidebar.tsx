type LayoutProps = {
  visibility?: string
}
export const AllActionSideBar = ({ visibility }: LayoutProps) => {
  return (
    <div className="bg-white shadow-2xl ml-10 w-52 fixed min-h-screen top-0">
      <h1 className="mt-4 ml-4 text-blue-800">Action Items</h1>
      <div className="flex mt-3">
        <input
          type="checkbox"
          className="checked:bg-blue-600 checked:border-transparent ml-2"
        ></input>
        <p className="text-xs ml-1 mr-2">
          Closing on pending text next week.Closing on pending text next week.{" "}
        </p>
      </div>
      <div className="flex mt-3">
        <input
          type="checkbox"
          className="checked:bg-blue-600 checked:border-transparent ml-2"
        ></input>
        <p className="text-xs ml-1 mr-2">
          Closing on pending text next week.Closing on pending text next week.{" "}
        </p>
      </div>
      <div className="flex mt-3">
        <input
          type="checkbox"
          className="checked:bg-blue-600 checked:border-transparent ml-2"
        ></input>
        <p className="text-xs ml-1 mr-2">
          Closing on pending text next week.Closing on pending text next week.{" "}
        </p>
      </div>
      <div className="flex mt-3">
        <input
          type="checkbox"
          className="checked:bg-blue-600 checked:border-transparent ml-2"
        ></input>
        <p className="text-xs ml-1 mr-2">
          Closing on pending text next week.Closing on pending text next week.{" "}
        </p>
      </div>
      <div className="flex mt-3">
        <input
          type="checkbox"
          className="checked:bg-blue-600 checked:border-transparent ml-2"
        ></input>
        <p className="text-xs ml-1 mr-2">
          Closing on pending text next week.Closing on pending text next week.{" "}
        </p>
      </div>
    </div>
  )
}

export default AllActionSideBar
