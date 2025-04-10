import Image1 from './assets/Image1.png'
import Image2 from './assets//Image2.png'
import Image3 from './assets/Image3.png'
import Image4 from './assets/Image4.png'
import Image5 from './assets/Image5.png'
import Image6 from './assets/Image6.png'

import './App.css'

function App() {


  return (
    <div className='container'>
      <img src={Image1} />
      <img src={Image2} />
      <img src={Image3} />
      <img src={Image4} />
      <img src={Image5} />
  
      <div className='image-overlay'>
        <img src={Image6} className='background-img' />
        <a
  href='https://wa.me/96178819017?text=Hello%20Cygne!'
  className='overlay-text-whatsapp'
  target='_blank'
  rel='noopener noreferrer'
>
  Whatsapp
</a>
<a
  href='https://outlook.live.com/owa/?path=/mail/action/compose&to=ali.najdi225@outlook.com'
  className='overlay-text-email'
  target='_blank'
  rel='noopener noreferrer'
>
  Email
</a>

        <a
          href='https://www.instagram.com/cygne.co.sarl/'
          className='overlay-text-instagram'
          target='_blank'
          rel='noopener noreferrer'
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default App
