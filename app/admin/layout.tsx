import SideBar from '@/components/sidebar/Sidebar'

export default function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const items = [{
    name: 'Analytics Report',
    pathname: '/admin/analyticsReport',
  }, {
    name: 'User Management',
    pathname: '/admin/userManagement',
  }, {
    name: 'Campaign Management',
    pathname: '/admin/campaignManagement',
  }, {
    name: 'Mood Management',
    pathname: '/admin/moodManagement',
  }, {
    name: 'GuideBook',
    pathname: '/admin/guideBook',
  }
  ]
  return (
    <section className='flex w-full h-screen font-mitr'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <SideBar items={items} name='captain' />
        {children}
    </section>
  )
}