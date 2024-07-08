import { Component } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { AudioService } from '../../services/audio.service';
import { CloudService } from '../../services/cloud.service';
import { StreamState } from '../../../interfaces/stream-state';
import { AuthService } from '../../services/auth.service';

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
  state: StreamState | undefined;
  currentFile: any = {};

  constructor( public audioService: AudioService, public cloudService: CloudService,public auth: AuthService) {
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

    return this.currentFile.index === 0;
  }
  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }
  play() {
    this.audioService.play();
  }
  pause() {
    this.audioService.pause();
  }
  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }
  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }
  onSliderChangeEnd(change: any) {
    this.audioService.seekTo(change.value);
  }

  playStream(url:string) {
    this.audioService.playStream(url).subscribe((events: any) => {
      // listening for fun here
    });
  }
  openFile(file: { url: string; }, index: any) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }
  stop() {
    this.audioService.stop();
  }
}
