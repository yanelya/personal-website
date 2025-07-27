import {useState} from 'react'

import Container from '../components/Container'
import FullscreenImage from '../components/FullscreenImage'
import ClickableImage from '../components/ClickableImage'

import drawing  from '../images/entry3.jpeg'

import { Link } from 'react-router-dom'

 
const Entry3 = () => {
    const [fullscreenSrc, setFullscreenSrc] = useState(null);

  return (
    <Container noBottomPadding>
      
        <p><em>traversing the world of adulthood as a first generation hispanic american twenty-four year old girl (woman?).</em></p>   

        <p>
            i once wrote an essay at seventeen about facades and how we "as kids live in bubbles that eventually burst as we grow up, 
            allowing life to creep up and eat us whole".
        </p>

        <p>
            next thing i know, i'm looking at a twenty four year old with a full time job and financial responsibilities 
            right across the mirror.
        </p>

        <p>
            adulthood is weird because one day you're just a girl, and the next you're not. and it kind of just happens out of nowhere.
            no warning. no notice. you kinda just wake up one day and then boom.
        </p>

        <p>
            all of a sudden you're doing taxes, setting up some "401k", and trying to hit your
            deductible so your insurance can finally cover your medical bills. what. the. actual. fuck.
        </p>

        <p>
            nevertheless, to be in such a fortunate and priviledged position brings me immense gratitude. 
        </p>

        <p>
            sure, yes, this is a result of the path i paved, and i should acknowledge and celebrate the sacrificies <em>i</em> made
            and the mindset <em>i</em> cultivated, but putting into perspective how these accolades were only able to be my
            reality because of the opportunities given to me in result of a foundation set by my parents,
            and their parents before me--i am flooded with gratitude.
        </p>

        <p>
            i grew up in my spanish culture, watching <em>sabado gigante</em> on the 
            weekends, and <em>caso cerrado</em> and <em>doce corazónes</em> on the weekdays. 
        </p>

        <p>
            we would go to mexican restaurants on the weekends and always order <em>una paraillada</em>. 
            i would lather <em>aguacate</em> on <em>torillas de harina</em> and top that with some rice, cheese, <em>pico de gallo</em>,
            and fajita. i would add some salsa if i was feeling a little spontaneous. SOOOO GOODD. 
        </p>

        <p>
            both my parents moved here at an early age, so they already had an established foundation 
            of the english language by the time i came into the world.
        </p>

        <p>
            given this dynamic, i picked up the language, but never fully grasped it enough to speak it properly.
            i'm not necessarily bilinigual, but, like most other first gen americans, receptive bilingual.
        </p>

        <p>
            having to explain this little caveat has always felt like some sort of humiliation ritual. 
        </p>

        <p>
            <em>"do you speak spanish?"</em> 
        </p>

        <p>
            fuck.
        </p>

        <p>
            <em>"well, i understand it fluently, pero siento que no lo puedo hablar muy bien."</em> 
        </p>

        <p>
           the amount of times i've encountered this conversation only to be met with a look of disdain, discontent, dissapproval. <u>it's discouraging.</u>
        </p>

        
        <p>
            language is such a <u><em>huge</em></u> part of culture, so being hispanic and having that barrier has
            definitely took a toll on my identity growing up and definitely still does today. the <em>no sabo</em> allegations 
            will never be beat. <em>pero sí sé!*</em> (*kinda!).
        </p>

        <p>
            there has always been a disbalance in my identity. 
        </p>

        <p>
            resonating more with my american culture having been
            immersed within it growing up, but also having to claim an identity i feel a stranger to. 
        </p>

        <p><em>
            batallando con dos mundos que no me quieren dejar entrar.
        </em></p>

        <p>
            it saddens me to my core that i get nervous each time i am placed in a position where i am forced to speak spanish.
            it's a reminder of a world i am from, but not connected to; an identity lost in translation that has
            neither been discovered, nor recovered. 
        </p>

        <p><em>
            el idioma siempre ha sentido como un abarzo para mí. cuando mi familia me habla en español, hay una calma y suavidad
            que se cae en mi alma. siento comoda. siento calída. se siente como casa. 
        </em></p>

        <p><em>
            entiendo la ironía que suena al decir eso, pero es la verdad. mí relación con el idioma es muy complicada, y va a 
            seguir siendo complicada, 
        </em> and that's ok.
        </p>

        <p>
            in all honesty--i just hope that i am one day able to order tacos from a taco truck without the cashier switching to english
            after hearing me attempt to order in my broken spanish. 
        </p>

        <p>
            i think then, <u>and only then</u>, will i truly and fully be comfortable embracing that side of me that i've 
            longed and waited for so long to get to know.
        </p>

      <br></br>

      <ClickableImage src={drawing} onClick={() => setFullscreenSrc(drawing)}/>

      {fullscreenSrc && (
        <FullscreenImage onClick={() => setFullscreenSrc(null)}>
          <img src={fullscreenSrc} alt="fullscreen" />
        </FullscreenImage>
      )}

      <Container noTopPadding={true}>
        06.28.25<br></br><br></br>
        <Link to={'/about'}>back to blogs.</Link>
      </Container>
      
    </Container>
  )
}



export default Entry3