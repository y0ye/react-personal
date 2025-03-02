import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import GreetingsCard from './components/GreetingsCard';
import AboutCard from './components/AboutCard';
import classes from './styles/app.module.css';
import TechStackCard from './components/TechStackCard';
import CatPostingCard from './components/CatPostingCard';
import CapstoneCard from './components/CapstoneCard';
import ContactCard from './components/ContactCard';

function App() {
  const [index, setIndex] = useState(0);
  const cards = [
                  <GreetingsCard key="greetings" />, 
                  <AboutCard key="about" />, 
                  <TechStackCard key="tech" />, 
                  <CatPostingCard key ="cat"/>,
                  <CapstoneCard key ="argo"/>,
                  <ContactCard key ="contact"/>
                ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % cards.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + cards.length) % cards.length),
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className={classes.cardstack}>
      <div className={classes.cardsContainer}>
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${classes.card} ${i === index ? classes.activeCard : classes.inactiveCard}`}
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${i === index ? 1 : 0.9})`,
              opacity: i === index ? 1 : 0,
              visibility: i === index ? 'visible' : 'hidden',
              zIndex: i === index ? 2 : 1,
              transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out, visibility 0.5s ease-in-out'
            }}
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
