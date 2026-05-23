import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inscription } from '../../../models/report.interface';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() item!: Inscription;

  @Output() courseSelected = new EventEmitter<Inscription>();

  openPreview(): void {
    this.courseSelected.emit(this.item);
  }

}
