import { Component } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { AudioService } from '../../services/audio.service';
import { CloudService } from '../../services/cloud.service';
import { StreamState } from '../../../interfaces/stream-state';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
// src/app/pages/player/player.component.ts
// ... import statements and @Component declaration ...
export class PlayerComponent {
  files: Array<any> = [
    { name: 'First Song', artist: 'Inder' },
    { name: 'Second Song', artist: 'You' },
  ];
  // state:MatSlider = new MatSlider();
  state: StreamState;
  currentFile: any = {};

  constructor( public audioService: AudioService, public cloudService: CloudService) {
    // get media files
    cloudService.getFiles().subscribe((files) => {
      this.files = files;
    });

    // listen to stream state
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }
  play() { }
  pause() { }
  next() { }
  previous() { }
  onSliderChangeEnd(input: any) { }
}
