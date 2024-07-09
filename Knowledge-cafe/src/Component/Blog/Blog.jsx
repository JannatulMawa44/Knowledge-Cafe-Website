


import PropTypes from 'prop-types'; // ES6
// import { FaBeer } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead}) => {
   // console.log(blog)
   const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
   return (
      <div className='mb-20 space-4'>
         <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
         <div className='flex justify-between mb-4 '>
            <div className='flex'>
               <img className='w-16 rounded-full' src={author_img} alt="" />
               <div className='ml-6'>
                  <h3 className='text-2xl'>{author}</h3>
                  <p>{posted_date}</p>
               </div>

            </div>
            <div>
               <span>{reading_time}min read</span>
               <button onClick={() => handleAddBookmark(blog)}
               className='ml-2 text-2xl text-red-600 '><IoBookmarksOutline></IoBookmarksOutline></button>
            </div>

         </div>

        <h2 className='text-4xl'>{title}</h2>
        <p>
         {
            hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span> )
         }
        </p>
        <button
        onClick={ () =>handleMarkAsRead(id,reading_time)}
        
        className='text-purple-600 font-bold underline'>Mark As Read</button>
      </div>

   );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired,
   handleAddBookmark: PropTypes.func,
   handleMarkAsRead: PropTypes.func
}

export default Blog;




