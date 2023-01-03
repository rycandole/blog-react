const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1 className="navbar__title">The Dojo Blog</h1>
      <div className="navbar__links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
   );
}
 
export default Navbar;