
interface ToolbarProps {
  selectedUsers: string[]
  onBlock: () => void
  onUnblock: () => void
  onDelete: () => void
}

export const Toolbar = ({
  selectedUsers,
  onBlock,
  onUnblock,
  onDelete,
}: ToolbarProps) => {
  return (
    <div className="mb-4 flex justify-start space-x-2">
      <button
        onClick={onBlock}
        disabled={selectedUsers.length === 0}
        className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
      >
        Block
      </button>
      <button
        onClick={onUnblock}
        disabled={selectedUsers.length === 0}
        className="p-2 border rounded disabled:opacity-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </button>
      <button
        onClick={onDelete}
        disabled={selectedUsers.length === 0}
        className="p-2 border rounded disabled:opacity-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        </svg>
      </button>
    </div>
  )
}
