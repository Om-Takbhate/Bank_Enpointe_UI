import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='w-full h-screen px-auto'>
      <Navbar />
      <div className='p-4'>
        <Outlet />

      </div>
    </div>
  )
}

export default Body