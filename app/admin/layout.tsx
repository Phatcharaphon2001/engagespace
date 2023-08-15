import SideBar from '@/components/sidebar/Sidebar'
export default function AdminLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className='flex w-full h-screen'>
        {/* Include shared UI here e.g. a header or sidebar */}
        <SideBar/>
        {children}
      </section>
    )
  }