import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent implements OnInit {
  imagesList = [];
  selectedImageName = null;
  constructor() { }

  ngOnInit() {
    this.imagesList = [{ props: [600, 400] }, { props: [600, 400] }, { props: [600, 400] }, { props: [600, 400] }, { props: [600, 400] }, { props: [400, 600] }, { props: [400, 600] }, { props: [400, 600] }, { props: [400, 600] }, { props: [400, 600] }, { props: [300, 300] }, { props: [300, 300] }, { props: [300, 300] }, { props: [800, 400] }, { props: [800, 400] }, { props: [500, 700] }, { props: [500, 700] }, { props: [500, 700] }, { props: [700, 500] }, { props: [700, 500] }]
    this.imagesList = this.shuffleList(this.imagesList.map((img, i) => {
      img.id = i + 1;
      return img;
    }));

  }

  openImage(img) {
    this.selectedImageName = img;
    document.body.classList.add('img-modal-open');
  }

  closeImageModal() {
    this.selectedImageName = null;
    document.body.classList.remove('img-modal-open');

  }

  openLeft() {
    const selectedImageIndex = this.imagesList.findIndex(img => img.id === this.selectedImageName.id);
    if (selectedImageIndex > 0) {
      this.selectedImageName = this.imagesList[selectedImageIndex - 1];
    }
  }

  openRight() {
    const selectedImageIndex = this.imagesList.findIndex(img => img.id === this.selectedImageName.id);
    if (selectedImageIndex < this.imagesList.length - 1) {
      this.selectedImageName = this.imagesList[selectedImageIndex + 1];
    }
  }

  shuffleList(unshuffledList) {
    let shuffledList = [];
    while (unshuffledList.length > 0) {
      let randomIndex = Math.floor(Math.random() * unshuffledList.length);
      shuffledList.push(...unshuffledList.splice(randomIndex, 1));

    }
    return shuffledList;
  }

}
