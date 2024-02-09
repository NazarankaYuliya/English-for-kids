import cards from '../data/cards';
import { wordStats } from './localStorage';

class StatItem {
  constructor(category, { word, translation, image, audioSrc }) {
    this.category = category;
    this.word = word;
    this.translation = translation;
    this.image = image;
    this.audioSrc = audioSrc;
    this.clicks = 0;
    this.guesses = 0;
    this.mistakes = 0;
    this.percentage = 0;
  }
}

export default function createStatItems() {
  const categories = cards[0];
  for (let i = 1; i < cards.length; i += 1) {
    cards[i].forEach((item) => {
      const stat = new StatItem(categories[i - 1], { ...item });
      wordStats[stat.word] = stat;
    });
  }
}
