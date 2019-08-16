import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: "app-modal-trailer",
  templateUrl: "./modal-trailer.component.html",
  styleUrls: ["./modal-trailer.component.scss"]
})
export class ModalTrailerComponent implements OnInit {

  @Input() trailer: any;
  public video: any;
  public videoUrl: string;
  public embedVideo: any;
  @Output() close = new EventEmitter<any>();

  constructor(public service: SharedService, public sanitizer: DomSanitizer) { }

  ngOnInit() {


    document.getElementById("modal").style.display = "block";

    this.trailer.hasOwnProperty('original_title') ?
      this.trailer = this.trailer.original_title :
      this.trailer = this.trailer.name;

    this.service.getTrailer(this.trailer).subscribe(data => {
      this.video = data["items"][0];
      this.videoUrl = "https://www.youtube.com/embed/" + this.video.id.videoId;
      this.embedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    });
  }

  public closeModal() {
    this.close.emit();
    document.getElementById("modal").style.display = "none";
  }
}
