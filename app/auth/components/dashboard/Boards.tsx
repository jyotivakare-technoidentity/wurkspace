import { ActionCard } from "app/auth/components/dashboard/ActionCard"
import { CreateActionCard } from "app/auth/components/dashboard/CreateActionCard"

type LayoutProps = {
  title?: string
  color?: string
}

export const Boards = ({ title, color }: LayoutProps) => {
  return (
    <div className="flex">
      <div className="bg-blue w-full p-0.5 min-h-screen	mt-4 flex font-sans">
        <div className="rounded bg-gray-100 w-64">
          <div
            className={`${color}	 p-2 rounded  border-b border-grey cursor-pointer hover:bg-grey-lighter`}
          >
            {title}
          </div>
          <ActionCard />
          <CreateActionCard />
        </div>
      </div>
    </div>
  )
}

export default Boards
