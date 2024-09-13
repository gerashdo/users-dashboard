
interface FormLayoutProps {
  children: React.ReactNode | React.ReactNode[]
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  title: string
}

export const FormLayout = ({ children, handleSubmit, title }: FormLayoutProps) => {
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
      {children}
    </form>
  )
}
