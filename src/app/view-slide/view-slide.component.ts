import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {  FormGroup, FormControl , Validators} from '@angular/forms';
@Component({
  selector: 'app-view-slide',
  templateUrl: './view-slide.component.html',
  styleUrls: ['./view-slide.component.scss'],
  providers: [NgbCarouselConfig],
})
export class ViewSlideComponent {
  imgForm!: FormGroup;
  //store 3-default image
  images: any[] = [
    {
      imgUrl: '../assets/marguerite-729510_1280.jpg',
      imgCapt: 'First Slide',
    },
    { imgUrl: '../assets/istockphoto-177682730-612x612.jpg', imgCapt: 'Second Slide' },
    {
      imgUrl: '../assets/flowers-276014_1280.jpg',
      imgCapt: 'Third Slide',
    },
  ];
  //bootstrap slider pre-define code
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  //reactive form data validate and store
  ngOnInit(): void {
    this.imgForm = new FormGroup({
      imgUrl: new FormControl('',Validators.required),
      imgCapt: new FormControl('',Validators.required),
    });
  }
  //adding new slide to the slider
  onSubmit() {
    const newImg = this.imgForm.value;
    const newImgObj = {
      imgUrl: newImg.imgUrl,
      imgCapt: newImg.imgCapt,
    };
    this.images.push(newImgObj);
  }
  //delete slide
  onDelete(index: number) {
    this.images.splice(index, 1);
  }
}