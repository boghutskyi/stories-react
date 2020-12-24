import dwayne from './pictures/dwayne-johnson.jpg'
import emma from './pictures/emma-watson.jpg'
import john from './pictures/john-cena.jpg'

import s1 from './pictures/stories/img (1).jpg'
import s2 from './pictures/stories/img (2).jpg'
import s3 from './pictures/stories/img (3).jpg'
import s4 from './pictures/stories/img (4).jpg'
import s5 from './pictures/stories/img (5).jpg'
import s6 from './pictures/stories/img (6).jpg'
import s7 from './pictures/stories/img (7).jpg'
import s8 from './pictures/stories/img (8).jpg'
import s9 from './pictures/stories/img (9).jpg'

export const data = [
  {
    id: 1, name: 'User1', userPic: dwayne, stories: [
      { imgUrl: s1 },
      { imgUrl: s2 },
      { imgUrl: s3 },
      { imgUrl: s4 }
    ]
  },
  {
    id: 2, name: 'User2', userPic: emma, stories: [
      { imgUrl: s5 },
      { imgUrl: s6 }
    ]
  },
  {
    id: 3, name: 'User3', userPic: john, stories: [
      { imgUrl: s7 },
      { imgUrl: s8 },
      { imgUrl: s9 }
    ]
  },
]