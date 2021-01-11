import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  title = 'AngPrac';
  ngAfterViewChecked() {
    let nav = document.getElementsByTagName("nav")[0];
    let cont: HTMLElement | any = document.getElementById('content-parent');
    cont.setAttribute("style", `min-height:calc(100vh - ${nav.offsetHeight}px)`);
  }

}
