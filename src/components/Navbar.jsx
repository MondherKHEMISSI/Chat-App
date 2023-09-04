import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className={`navbar fixed z-10 ${currentUser ? "bg-black" : "bg-inehert"}  text-neutral-content`}>
      <div className="containerWrap flex justify-between">
        {currentUser ?
        <div className="flex"> 
          <div className="avatar online mr-2">
            <div className="w-10 rounded-full">
              <img src={currentUser.photoURL} />
            </div>
          </div> 
          <div className="mt-2">
            {currentUser.displayName}
          </div>
        </div> : <a className="btn btn-outline normal-case text-xl">Chat Room</a>}
        {currentUser && <button className="btn btn-primary" onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  )
}

export default Navbar