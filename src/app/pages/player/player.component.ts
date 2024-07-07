import { Component } from '@angular/core';
import { MatSlider } from '@angular/material/slider';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
// src/app/pages/player/player.component.ts
// ... import statements and @Component declaration ...
export class PlayerComponent {
  files: Array<any> = [
    { name: "First Song", artist: "Inder" },
    { name: "Second Song", artist: "You" }
  ];
  state:MatSlider = new MatSlider();
  currentFile: any = {};

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }
  play() {

  }
  pause() {

  }
  next() {

  }
  previous() {
  
  }
  onSliderChangeEnd(input:any) {

  }
}

