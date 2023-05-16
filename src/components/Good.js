import React from 'react'
import AdditionalLinks from './AdditionalLinks'
import { Helmet } from "react-helmet";
import '../App.css'
function Good() {
  return (
    <div>
        <Helmet>
      <title> 🐇 Good Vibes Everlasting</title>
      </Helmet>
      <h1>Good Vibes Everlasting</h1>
      <div className='content'>
         <div>
          <p>
          If you ask someone if they are religious, or believe in God, they will often reply: ‘I believe in something.’
          </p>
          <p>
          Good Vibes are that something. It is an isness and a rightness in the world, numinously known, resisting definition or description, experienced in art and action, community and Tradition. Good Vibes are a radical refutation of Nihilism: the necrotic absence in the heart of the modern world.
          </p>
          <p>
          Good vibes can be understood in different ways by different people. A Christian, for example, might understand Good Vibes to be: the love between God and Man, or the healing benevolence of the Holy Spirit, or God’s presence in the world, as Christ; a Jew might identify the ruach haqodesh – a personification or attribute of God, and/or the indwelling of the divine; a Muslim might find Ruh al-Qudus, the spirit of holiness, or Fayd, the effusion of blessings and abundance.
          </p>
          <p>
          All might see it quite differently, or simply find in Those Based Vibes a hazy conception of God, or spirit, or universal love.
          </p>
          <p>
          For those who do not believe, the affirmation is a revolutionary enactment of existentialism: faced with the ruins of a transvaluated world, they demand meaning and purpose where there is none, except that which we can build ourselves; theirs is a will to power, but also love. They stare down the void.
          </p>
          <p>
          Regardless of their tradition, or personal interpretation of the world, and/or the divine, by professing top tier vibes as one for all and all for one, a person performs a move towards the forever city: they affirm the purpose and meaning of the universe as the ultimate root of all endeavour. They bear witness to Creation, and see that it is Good Vibes.
          </p>
         </div>
   </div>
         <div>
        <AdditionalLinks />
      </div>
    </div>
  )
}

export default Good
