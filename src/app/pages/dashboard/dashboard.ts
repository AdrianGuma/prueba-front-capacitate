import {
  Component,
  OnInit,
  inject,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReportService } from '../../core/services/report.service';
import { ReportResponse } from '../../models/report.interface';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../../shared/components/course-card/course-card';
import { StatsCard } from '../../shared/components/stats-card/stats-card';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  CourseCard,
  StatsCard
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {



  private cdr = inject(ChangeDetectorRef);

  private reportService = inject(ReportService);

  reportData!: ReportResponse;

  loading = true;
  error = false;

  searchTerm = '';
  selectedSector = 'Todos';
  selectedStatus = 'Todos';


  ngOnInit(): void {
    this.getData();
  }

  getData(): void {

    this.loading = true;
    this.error = false;

    console.log('Iniciando petición...');

    this.reportService.getReport().subscribe({

      next: (response) => {

        console.log('Respuesta API:', response);

        this.reportData = response;

        this.loading = false;
        this.error = false;

        this.cdr.detectChanges();

      },

      error: (err) => {

        console.error('Error API:', err);

        this.error = true;
        this.loading = false;

      },

      complete: () => {

        console.log('Petición finalizada');

      }

    });

  }

  get fullName(): string {

    const person = this.reportData?.people?.[0];

    if (!person) {
      return 'Usuario';
    }

    return `${person.name} ${person.lastName}`;

  }

  get inscriptions() {
    return this.reportData?.inscriptions ?? [];
  }

  get totalCourses(): number {
    return this.inscriptions.length;
  }

  get completedCourses(): number {

    return this.inscriptions.filter(
      item => item.advance === 100
    ).length;

  }

  get averageAdvance(): number {

    if (!this.inscriptions.length) return 0;

    const total = this.inscriptions.reduce(
      (sum, item) => sum + item.advance,
      0
    );

    return Math.round(total / this.inscriptions.length);

  }

  get bestScore(): number {

    if (!this.inscriptions.length) return 0;

    return Math.max(
      ...this.inscriptions.map(item => item.scoreCourse)
    );

  }

  get sectors(): string[] {

    const sectorNames = this.inscriptions
      .map(item => item.course?.sector?.name)
      .filter(Boolean);

    return ['Todos', ...new Set(sectorNames)];

  }

  get filteredInscriptions() {

  let data = [...this.inscriptions];

  data = data.filter(item => {

    const matchesSearch = item.course.name
      .toLowerCase()
      .includes(this.searchTerm.toLowerCase());

    const matchesSector =
      this.selectedSector === 'Todos' ||
      item.course.sector.name === this.selectedSector;

    const matchesStatus =
      this.selectedStatus === 'Todos' ||
      this.selectedStatus === 'A-Z' ||
      (this.selectedStatus === 'En proceso' && item.advance > 0 && item.advance < 100) ||
      (this.selectedStatus === 'Completados' && item.advance === 100);

    return matchesSearch && matchesSector && matchesStatus;

  });

  if (this.selectedStatus === 'A-Z') {
    data = [...data].sort((a, b) =>
      a.course.name.localeCompare(b.course.name, 'es', {
        sensitivity: 'base'
      })
    );
  }

  return data;

}

  selectedCourseName = '';
  selectedCourse: any = null;

openCoursePreview(course: any): void {

  this.selectedCourse = course;

}

showComingSoon(courseName: string): void {
  alert(
    `"${courseName}" estará disponible próximamente.\n\nContrátame para desbloquear la experiencia completa`
  );
}



}
