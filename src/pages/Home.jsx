import React,{useState, useEffect} from 'react'
import Cards from '../components/Cards'
import { blogsData } from '../constants/blogs'


const Home = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlog, setFilteredBlog] = useState(blogsData);


  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const filterData = () => {
    let filtered = blogsData;

    if(searchQuery){
      filtered = filtered.filter(item=>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredBlog(filtered)
  }

  useEffect(() => {
    filterData()
}, [searchQuery])


  return (
    <main>
      <div className="grid min-h-min place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center lg:w-4/5">
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
            Welcome to Our Blog
          </h1>
          <p className="mt-6 text-pretty text-lg font-poppins text-gray-600 sm:text-lg/8">
            A vibrant and eye-catching web banner showcasing the latest travel blog updates, featuring stunning visuals of scenic destinations and an inviting call-to-action like 'Explore the World with Us!
          </p>
          <div className="mt-10">
            <button className='bg-[#FF5733] py-2 px-4 rounded-md text-white font-semibold hover:bg-black hover:text-white'>Learn More</button>
          </div>
        </div>
      </div>

      <hr className='mx-8' />
      {/* Latest Blogs */}
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between'>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Latest Blogs
            (filter )
          </h2>
          <input type="text"
          className='px-2 py-2 border border-gray-400 outline-none rounded-md lg:w-96' 
          placeholder="Search for...." 
          onChange={handleSearch}
          />
        </div>

        {/* cards */}
        <div className='lg:mt-4 mt-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          <Cards items={filteredBlog}/>
        </div>
      </div>
    </main>
  )
}

export default Home