import React from 'react';
import styles from './About.module.scss';
import { YEAR } from 'utils/constants';

const FIRST_YEAR_OF_PHOTOGRAPHY = 2003;
const FIRST_YEAR_OF_DEVELOPMENT = 2008;

export default function About() {
  return (
    <div className={styles.root}>
      <p>
        <strong className={styles.strong}>About</strong> My name is Leonardo but you can call me
        Leo! I am based in San Francisco, California.
      </p>
      <p>
        <strong className={styles.strong}>Film</strong> Besides photographing lifestyle and
        destination weddings for almost {YEAR - FIRST_YEAR_OF_PHOTOGRAPHY} years, I’ve been been
        running my own photo lab for the last {YEAR - FIRST_YEAR_OF_DEVELOPMENT} plus years. I
        personally develop and scan all of the film that I shoot. I love understanding and
        constantly improving every single step of the analog and digital photographic process.
      </p>
      <p>
        <strong className={styles.strong}>Buenos Aires</strong> I was born and raised in a city by
        the Atlantic Ocean called Mar Del Plata in Buenos Aires, Argentina. Yes, Spanish is my first
        language! That’s why you’ll hear a little accent here and there when I speak english.
      </p>
      <p>
        <strong className={styles.strong}>Music</strong> My hobby. I'm very passionate about
        collecting vinyl records and cassette tapes. I also have a random gift for remembering album
        names and the release years. If you know of anything productive I could do with this talent
        let me know!
      </p>
      <p>
        <strong className={styles.strong}>Kodak 400VC</strong> Along with the exceptional Kodak,
        160VC, 160NC - 400NC, Fujifilm 800Z, Kodak High Speed Infrared, Agfa Scala-200, Kodachrome
        64, Kodak Ektachrome 100 Plus - 160T - 64T, 100VS, 100G, 100GS, Fujichrome 64T are an
        assortment of expired films I keep in my freezer, which is more important than food!
      </p>
      <p>
        <strong className={styles.strong}>Travel</strong> One of my favorite things to do for a
        living! Diving into new cultures lens first and coming home each time with a greater sense
        of the world is something I am endlessly thankful for. The amazing new friends I make along
        the way, landscapes I take back with me on film, and game changing eating adventures are
        always a bonus!
      </p>
      <p>
        <strong className={styles.strong}>Wedding photography</strong> Every time just like the
        last, it’s always a huge honor when couples trust my eye and sensitivity to tell the story
        of their big day through photography. I always find wedding coverage to be so fascinating.
        Its complexity is full of subtle heartfelt expressions, intimate layers of emotions,
        inspirational life stories, and interactions happening all at once. It is a job that
        requires all my senses be awake in order to fully absorb the moments and create rich
        meaningful photographs for my clients. I photographed my first wedding over a decade ago and
        that exceptional feeling of joy has been resonant at every wedding since.
      </p>
      <p>
        <strong className={styles.strong}>Awesome</strong> Apologizing in advance for maybe saying
        this word too much when I’m taking pictures! Awesome! Thanks!
      </p>
    </div>
  );
}
