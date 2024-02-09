import cards from '../data/cards';

export default class Card {
  constructor({ categoryName, id, word, translation, image, audioSrc }) {
    this.categoryName = categoryName ?? null;
    this.id = id + 1 ?? null;
    this.word = word ?? null;
    this.translation = translation ?? null;
    this.image = `./data/${image}` ?? null;
    this.audioSrc = `./data/${audioSrc}` ?? null;
  }

  generateCardHTML(index) {
    return `
        <div class="card" id="${index + 1}">
            <div class="front">
                <div class="card-image">
                    <img src="${this.image}" alt="${this.word}">
                </div>
                <div class="card-description">
                    <h4>${this.word}</h4>
                    <img class="rotate" src="./data/img/rotate.svg" alt="rotate" width="20px">
                </div>
            </div>
            <div class="back">
                <div class="card-image">
                    <img src="${this.image}" alt="${this.word}">
                </div>
                <div class="card-description">
                    <h4>${this.translation}</h4>
                </div>
            </div>
            <audio class="card-audio " src="${this.audioSrc}"></audio>
        </div>
      `;
  }

  generateCategoryHTML() {
    return `
        <div class='category-image'>
            <img src='./data/${cards[this.id][0].image}'  alt='${
      this.categoryName
    }' >
         </div>
         <div class='category-description'>
            <h4>${this.categoryName}</h4>
            <h5>${cards[this.id].length} cards</h5>
         </div>
        `;
  }
}
