import React, { useCallback, useEffect, useRef, useState } from 'react'
import { data } from './data'

function App() {
  
  const [imgUrl, setImgUrl] = useState('')
  const [imgIndex, setImgIndex] = useState(0)
  const [indicatorIndex, setIndicatorIndex] = useState(0)
  const [userIndex, setUserIndex] = useState(0)
  const [pauseIcon, setPauseIcon] = useState(true)
  const storyContainer = useRef(null)

  const showStory = useCallback( async () => {
    const stories = document.querySelectorAll('.indicator')
    Array.from(stories).map((item, index) => {
      return index < indicatorIndex
        ? item.classList.add('active-done')
        : item.classList.remove('active-done')
    })
    stories[indicatorIndex].classList.toggle('active')
    setImgUrl(data[userIndex].stories[imgIndex].imgUrl)
  }, [imgIndex, userIndex, indicatorIndex])

  // const looper = async () => {
    // const waitFunc = ms => {
    //   return new Promise(resolve => setTimeout(() => resolve(), ms))
    // }
  //   const stories = document.querySelectorAll('.indicator')
  //   for (const [index, story] of stories.entries()) {
  //     setImgUrl(data[0].stories[imgIndex].imgUrl)
  //     story.classList.toggle('active')
  //     await waitFunc(5000)
  //     setImgIndex(prev => prev + 1)
  //   }
  // }

  useEffect(() => {
    showStory()
  }, [imgIndex, userIndex, indicatorIndex, showStory])

  const pauseHandler = () => {
    setPauseIcon(prev => !prev)
    const stories = document.querySelectorAll('.indicator')
    pauseIcon
      ? stories[indicatorIndex].style.animationPlayState = 'paused'
      : stories[indicatorIndex].style.animationPlayState = 'running'
  }

  const forwardHandler = () => {
    setIndicatorIndex(prev => prev + 1)
    setPauseIcon(true)
    if (imgIndex >= data[userIndex].stories.length - 1) {
      storyContainer.current.style.transform += `translateX(${-405}px)`
      setImgIndex(0)
      setUserIndex(prev => prev + 1)
      return
    }
    setImgIndex(prev => prev + 1)
    showStory()
  }

  const backHandler = () => {
    setPauseIcon(true)
    if (indicatorIndex < 1) {
      return
    }
    setIndicatorIndex(prev => prev - 1)
    if (imgIndex === 0) {
      setUserIndex(prev => prev - 1)
      storyContainer.current.style.transform += `translateX(${405}px)`
      setImgIndex(data[userIndex-1].stories.length - 1) //last picture from user
    } else {
      setImgIndex(prev => prev - 1)
    }
    showStory()
  }


  return (
    <div className="container">
      <div className="story-container" ref={storyContainer}>
        {data.map(item => {
          return (
            <div className="story" key={item.id}>
              <div className="header">
                <div className="timeline">
                  {item.stories.map((dash) => {
                    return <div key={dash.imgUrl} className="dash"><div className="indicator" /></div>
                  })}
                </div>
                <div className="user">
                  <div className="user-info">
                    <div className="user-picture">
                      <img src={item.userPic} alt="" ></img>
                    </div>
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="pause"><span className="material-icons-round" onClick={pauseHandler}>
                    {pauseIcon
                      ? 'pause'
                      : 'play_arrow'}
                  </span></div>
                </div>
              </div>
              <div className="nav">
                <div className="forward" onClick={forwardHandler}></div>
                <div className="back" onClick={backHandler}></div>
              </div>
              <div className="story-img">
                <img src={imgUrl} alt="" />
              </div>
            </div>
          )
        })
        }
      </div>
    </div >
  )
}

export default App
