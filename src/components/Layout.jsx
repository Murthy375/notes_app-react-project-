const Layout = ({ children }) => {
  return (
    <section 
    className="bg-slate-900 h-screen text-neutral-50 px-3 sm:px-6 w-full" 
    >
      {children}
    </section>
  )
}

export default Layout