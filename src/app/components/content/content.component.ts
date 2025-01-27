import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ResumeComponent } from "../resume/resume.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HeaderComponent, ResumeComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
