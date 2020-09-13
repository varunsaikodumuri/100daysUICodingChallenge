import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.scss']
})
export class MinesweeperComponent implements OnInit {
  width = 10;
  bombAmount = 10;
  gridArray = [];
  bombArray = [];
  emptyArray = [];
  gameArray = [];
  shuffledArray = [];
  countArray = [];
  isGameOver = false;
  isWinner = false;
  flags = 0;
  constructor() { }

  ngOnInit() {
    this.newGame()
  }

  click(i) {
    if (this.isGameOver) return;
    if (this.countArray[i].isChecked || this.countArray[i].isFlag) return;
    if (this.shuffledArray[i] === 'bomb') {
      this.isGameOver = true;
      this.countArray = this.countArray.map((count, i) => {
        if (this.shuffledArray[i] === 'bomb') {
          count.isChecked = true;
        }
        return count;
      })
      return;
    } else {
      this.countArray[i].isChecked = true;
      this.checkForWin();
      if (this.countArray[i].count !== 0) return;
      this.checkSquare(i);

    }
  }

  checkSquare(currentId) {
    const isLeftEdge = (currentId % this.width === 0);
    const isRightEdge = (currentId % this.width === this.width - 1);
    setTimeout(() => {
      if (currentId > 0 && !isLeftEdge) { // Left
        this.click(this.gridArray[currentId - 1]);
      }

      if (currentId > 9 && !isRightEdge) { //Top Right
        this.click(this.gridArray[currentId + 1 - this.width]);
      }

      if (currentId > 9) { //Top
        this.click(this.gridArray[currentId - this.width]);
      }

      if (currentId > 10 && !isLeftEdge) { //Top Left
        this.click(this.gridArray[currentId - 1 - this.width]);
      }

      if (currentId < 99 && !isRightEdge) { //Right
        this.click(this.gridArray[currentId + 1]);
      }

      if (currentId < 91 && !isLeftEdge) { //Bottom Left
        this.click(this.gridArray[currentId - 1 + this.width]);
      }

      if (currentId < 89 && !isRightEdge) { //Bottom Right
        this.click(this.gridArray[currentId + 1 + this.width]);
      }

      if (currentId < 90 && !isRightEdge) { //Bottom
        this.click(this.gridArray[currentId + this.width]);
      }
    }, 10)
  }

  onRightClick(event, i) {
    event.preventDefault()
    if (this.isGameOver) return;
    if (!this.countArray[i].isChecked && this.countArray[i].isFlag) {
      this.countArray[i].isFlag = false;
      this.flags--;
    } else if (!this.countArray[i].isChecked && (this.flags < this.bombAmount)) {
      if (!this.countArray[i].isFlag) {
        this.countArray[i].isFlag = true;
        this.flags++;
      }
    }
    this.checkForWin();
  }

  checkForWin() {
    let isWin = false;
    if (this.flags === this.bombAmount) {
      isWin = true;
      this.countArray.forEach((element, i) => {
        if ((this.shuffledArray[i] === 'bomb' && !element.isFlag) ||
          (this.shuffledArray[i] === 'valid' && element.isFlag)) {
          isWin = false;
        }
      });
    } else {
      isWin = true;
      this.countArray.forEach((element, i) => {
        if (this.shuffledArray[i] === 'valid') {
          isWin = isWin && element.isChecked;
        }
      });
    }
    if (isWin) {
      console.log('Congrats! You are a winner');
      this.isGameOver = true;
      this.isWinner = true;
    }
  }

  newGame() {
    this.gridArray = Array(this.width * this.width).fill(null).map((val, i) => i);
    this.bombArray = Array(this.bombAmount).fill('bomb');
    this.emptyArray = Array(this.width * this.width - this.bombAmount).fill('valid');
    this.gameArray = this.emptyArray.concat(this.bombArray);
    this.shuffledArray = this.gameArray.sort(() => Math.random() - 0.5);
    this.countArray = Array(this.width * this.width).fill(null).map(() => { return { count: 0, isChecked: false, isFlag: false } });
    this.isGameOver = false;
    this.isWinner = false;
    this.flags = 0;

    for (let i = 0; i < this.gridArray.length; i++) {
      let total = 0;
      const isLeftEdge = (i % this.width === 0);
      const isRightEdge = (i % this.width === this.width - 1);
      if (this.shuffledArray[i] === 'valid') {
        if (i > 0 && !isLeftEdge && this.shuffledArray[i - 1] === 'bomb') total++; // Left
        if (i > 9 && !isRightEdge && this.shuffledArray[i + 1 - this.width] === 'bomb') total++; // Top Right
        if (i > 9 && this.shuffledArray[i - this.width] === 'bomb') total++; // Top
        if (i > 10 && !isLeftEdge && this.shuffledArray[i - 1 - this.width] === 'bomb') total++; // Top Left
        if (i < 99 && !isRightEdge && this.shuffledArray[i + 1] === 'bomb') total++; // Right
        if (i < 91 && !isLeftEdge && this.shuffledArray[i - 1 + this.width] === 'bomb') total++; // Bottom Left
        if (i < 89 && !isRightEdge && this.shuffledArray[i + 1 + this.width] === 'bomb') total++; // Bottom Right
        if (i < 90 && !isRightEdge && this.shuffledArray[i + this.width] === 'bomb') total++; // Bottom
      }

      this.countArray[i]['count'] = total;
    }
  }
}
