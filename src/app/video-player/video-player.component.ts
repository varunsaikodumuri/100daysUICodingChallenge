import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';

@Pipe({ name: 'getTime' })
export class TimeDisplayPipe implements PipeTransform {
  transform(value: number): string {
    let ss: string | number = value % 60 || 0;
    let mm: string | number = Math.floor(value / 60) % 60 || 0;
    let hh: string | number = Math.floor(value / 3600) || 0;

    if (ss < 10) {
      ss = '0' + ss;
    }

    let result = `${mm}:${ss}`;
    if (hh > 0) {
      if (mm < 10) {
        mm = '0' + mm;
      }
      result = `${hh}:${mm}:${ss}`
    }
    return result;
  }
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer', { static: false }) videoPlayer: ElementRef<HTMLMediaElement>;
  @ViewChild('videoPlayerContainer', { static: false }) videoPlayerContainer: ElementRef;
  @ViewChild('playbackSpeedControl', { static: false }) playbackSpeedControl: ElementRef;
  isFullScreen = false;
  playbackOptions = [{ value: 0.25, label: '0.25' },
  { value: 0.5, label: '0.5' },
  { value: 0.75, label: '0.75' }, { value: 1, label: 'Normal' }, { value: 1.25, label: '1.25' }, { value: 1.5, label: '1.5' }, { value: 1.75, label: '1.75' }, { value: 2, label: '2' }]
  playbackValue = 1;
  volumeValue = 1;
  isMuted = false;
  hidePlayback = true;
  idleObj = { idleStatus: false, idleTime: 0 };
  constructor() { }


  ngOnInit() {
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.idleObj.idleStatus = true;
      this.idleObj.idleTime += 1;

      if (this.isFullScreen && this.isIdle()) {
        document.body.style.cursor = 'none';
      } else {
        document.body.style.cursor = 'inherit';
      }
    }, 1000)
  }

  isIdle() {
    return this.idleObj.idleStatus && this.idleObj.idleTime >= 3;
  }

  playPauseVideo() {
    if (this.isPaused()) {
      this.videoPlayer.nativeElement.play();
    } else {
      this.videoPlayer.nativeElement.pause();
    }
  }

  rewind() {
    this.videoPlayer.nativeElement.currentTime -= 3;
  }

  forward() {
    this.videoPlayer.nativeElement.currentTime += 3;
  }

  changeVolume(val) {
    if ((this.volumeValue <= 0.8 && val == 1) || (this.volumeValue >= 0.2 && val == -1))
      this.volumeValue += val * 0.2;
    else if (val === 1)
      this.volumeValue = 1;
    else if (val === -1)
      this.volumeValue = 0;
    this.volumeValue = parseFloat(this.volumeValue.toFixed(1))
    this.volumeChanged()
  }

  isPaused() {

    if (!this.videoPlayer || !this.videoPlayer.nativeElement) {
      return true;
    }
    return this.videoPlayer.nativeElement.paused;
  }

  getVideoElement() {
    return this.videoPlayer && this.videoPlayer.nativeElement;
  }

  getCurrentTime() {
    if (!this.videoPlayer || !this.videoPlayer.nativeElement) {
      return '';
    }
    return Math.floor(this.videoPlayer.nativeElement.currentTime);
  }

  getTotalDuration() {
    if (!this.videoPlayer || !this.videoPlayer.nativeElement) {
      return '';
    }
    return Math.floor(this.videoPlayer.nativeElement.duration);
  }

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    if (document.fullscreenEnabled) {
      if (!document.fullscreenElement) {
        this.videoPlayerContainer.nativeElement.requestFullscreen().catch(err => {
          alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e) {
    if (!this.hidePlayback && !this.playbackSpeedControl.nativeElement.contains(e.target)) {
      this.hidePlayback = true;
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
        setTimeout(() => {
          if (document.activeElement.getAttribute('tabindex') === null || +document.activeElement.getAttribute('tabindex') < 0) {
            this.playPauseVideo();
          }
        });
        return;
      case 'ArrowUp':
        this.changeVolume(1);
        return;
      case 'ArrowDown':
        this.changeVolume(-1);
        return;
      case 'ArrowLeft':
        this.rewind();
        return;
      case 'ArrowRight':
        this.forward();
        return;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.idleObj.idleStatus = false;
    this.idleObj.idleTime = 0;
  }

  togglePlaybackButton() {
    this.hidePlayback = !this.hidePlayback;
  }

  selectPlaybackOption(value) {
    this.playbackValue = value;
    this.videoPlayer.nativeElement.playbackRate = value;
    this.togglePlaybackButton();
  }

  volumeChanged() {
    if ((this.volumeValue === 0 && !this.isMuted) || this.isMuted) {
      this.toggleMute()
    }
    if (this.volumeValue <= 1 && this.volumeValue >= 0)
      this.videoPlayer.nativeElement.volume = this.volumeValue;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.videoPlayer.nativeElement.muted = this.isMuted;
  }

  videoControlsClicked(event, videoControls) {
    if (event.target === videoControls) {
      this.playPauseVideo();
    }
  }
}
