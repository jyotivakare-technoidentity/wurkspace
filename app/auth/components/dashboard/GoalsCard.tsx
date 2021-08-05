import ProgressBar from "@ramonak/react-progress-bar"

export const GoalsCard = () => {
  return (
    <>
      <div className="m-2">
        <div className="bg-white p-1 rounded shadow-lg relative hover:shadow-2xl">
          <p className="text-black mb-1 text-xs text-left">
            Create basic card for youl.Create basic card for youl
          </p>
          <div className="mx-1 pt-1 ">
            <ProgressBar completed={60} height="10px" bgColor="#4338CA" labelSize="7px" />
          </div>
        </div>
      </div>
      <div className="m-2">
        <div className="bg-white p-1 rounded shadow-lg relative hover:shadow-2xl">
          <p className=" mb-1 text-xs text-left">
            Create basic card for youl.Create basic card for youl
          </p>
          <div className="mx-1 pt-1 ">
            <ProgressBar completed={30} height="10px" bgColor="#F59E0B" labelSize="7px" />
          </div>
        </div>
      </div>
      <div className="m-2">
        <div className="bg-white p-1 rounded shadow-lg relative hover:shadow-2xl">
          <p className=" mb-1 text-xs text-left">
            Create basic card for youl.Create basic card for youl
          </p>
          <div className="mx-1 pt-1 ">
            <ProgressBar completed={90} height="10px" bgColor="#047857" labelSize="7px" />
          </div>
        </div>
      </div>
    </>
  )
}
export default GoalsCard
