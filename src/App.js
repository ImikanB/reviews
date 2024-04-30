import React, { useState, useEffect } from 'react'
import names from './data'

const App = () => {
  const [index, setIndex] = useState(0) // Initialize index state
  const [review, setReview] = useState([])

  useEffect(() => {
    setReview([names[index]]) // Initialize review state with the first item
  }, [index])

  const handlePrevClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? names.length - 1 : prevIndex - 1
    ) // Handle previous button click
  }

  const handleNextClick = () => {
    setIndex((prevIndex) =>
      prevIndex === names.length - 1 ? 0 : prevIndex + 1
    ) // Handle next button click
  }

  const handleSurpriseClick = () => {
    const randomIndex = Math.floor(Math.random() * names.length) // Generate random index
    setIndex(randomIndex) // Set index to the random index
  }

  return (
    <main>
      <article className='review'>
        {review.map((data) => {
          const { img, name, job, info, idx } = data
          return (
            <div key={idx} className='review-item'>
              <div className='img-container'>
                <img className='img' src={img} alt='' />
                <span className='quote-icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    stroke-width='0'
                    stroke='currentColor'
                    fill='currentColor'
                    viewBox='0 0 512 512'
                  >
                    <path d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'></path>
                  </svg>
                </span>
              </div>
              <h4 className='author'>{name}</h4>
              <p className='job'>{job}</p>
              <p className='info'>{info}</p>
              <div className='btn-container'>
                <button className='prev-btn' onClick={handlePrevClick}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 320 512'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path>
                  </svg>
                </button>
                <button className='next-btn' onClick={handleNextClick}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 320 512'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
                  </svg>
                </button>
              </div>
              <button className='surprise' onClick={handleSurpriseClick}>
                Surprise Me
              </button>
            </div>
          )
        })}
      </article>
    </main>
  )
}

export default App

// import React, { useState, useEffect } from 'react'

// import names from './data'

// const App = () => {
//   const [review, setReview] = useState([])

//   useEffect(() => {
//     setReview(names)
//   }, [])

//   return (
//     <main>
//       <article className='review'>
//         {review.map((data) => {
//           const { img, name, job, info, index } = data
//           return (
//             <div key={index} className='review-item'>
//               <div className='img-container'>
//                 <img className='img' src={img} alt='' />
//                 <span className='quote-icon'>
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     width='1em'
//                     height='1em'
//                     stroke-width='0'
//                     stroke='currentColor'
//                     fill='currentColor'
//                     viewBox='0 0 512 512'
//                   >
//                     <path d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'></path>
//                   </svg>
//                 </span>
//               </div>
//               <h4 className='author'>{name}</h4>
//               <p className='job'>{job}</p>
//               <p className='info'>{info}</p>
//               <div className='btn-container'>
// <button className='prev-btn'>
//   <svg
//     stroke='currentColor'
//     fill='currentColor'
//     stroke-width='0'
//     viewBox='0 0 320 512'
//     height='1em'
//     width='1em'
//     xmlns='http://www.w3.org/2000/svg'
//   >
//     <path d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path>
//   </svg>
// </button>
//                 <button className='next-btn'>
// <svg
//   stroke='currentColor'
//   fill='currentColor'
//   stroke-width='0'
//   viewBox='0 0 320 512'
//   height='1em'
//   width='1em'
//   xmlns='http://www.w3.org/2000/svg'
// >
//   <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
// </svg>
//                 </button>
//               </div>
//               <button className='surprise'>surprise me</button>
//             </div>
//           )
//         })}
//       </article>
//     </main>
//   )
// }

// export default App
