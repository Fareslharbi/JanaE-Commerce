import React from 'react'
import './Categories.css'
import categoryimg from '../../../assists/categoryimg.png'
import categoryimg1 from '../../../assists/categoryimg1.png'
import categoryimg2 from '../../../assists/categoryimg2.png'
import categoryimg3 from '../../../assists/categoryimg3.png'
import categoryimg4 from '../../../assists/categoryimg4.png'
import categoryimg5 from '../../../assists/categoryimg5.png'
import categoryimg6 from '../../../assists/categoryimg6.svg'
import categoryimg7 from '../../../assists/categoryimg7.png'

const Categories = () => {
    const dict_categories = [
        {
          id: 1, 
          title: 'Skincare Routine Builder',
          img: categoryimg,
        },
        {
          id: 2, 
          title: 'The Natural Sculpted Look',
          img: categoryimg1,
        },
        {
          id: 3, 
          title: 'The Natural Sculpted Look',
          img: categoryimg2,
        },
        {
          id: 4, 
          title: 'The Natural Sculpted Look',
          img: categoryimg3,
        },
        {
          id: 5, 
          title: 'The Natural Sculpted Look',
          img: categoryimg4,
        },
        {
          id: 6, 
          title: 'The Natural Sculpted Look',
          img: categoryimg5,
        },
        {
          id: 7, 
          title: 'The Natural Sculpted Look',
          img: categoryimg6,
        },
        {
          id: 8, 
          title: 'The Natural Sculpted Look',
          img: categoryimg7,
        },
      ]
      
  return (
    <div>
      <div className='Categories_container'>
      <div className='Categories_desc'>
        <h2>Featured Categories</h2>
        <p>Shop what's popular now.</p>
      </div>
      <div className='mom_smallCategories_card'>{
        dict_categories.map(({id, title, img}) => {
          return (
            <div id={id} className='smallCategories_card'>
              <label>{title}</label>
              <div className='categories_img_container'><img src={img} alt='a'/></div>
            </div>
          )
        })
      }</div>
      </div>
      <div className='Categories_container'>
      <div className='Categories_desc'>
        <h2>Featured Categories</h2>
        <p>Shop what's popular now.</p>
      </div>
      <div className='mom_smallCategories_card'>{
        dict_categories.map(({id, title, img}) => {
          return (
            <div id={id} className='smallCategories_card'>
              <label>{title}</label>
              <div className='categories_img_container'><img src={img} alt='a'/></div>
            </div>
          )
        })
      }</div>
    </div>
    </div>
  )
}
export default Categories
