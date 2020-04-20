import { Component, OnInit } from '@angular/core';
import { CollegeService, CollegeInterface } from 'src/app/services/college.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  colleges : CollegeInterface[] = []
  constructor(private collegeService :CollegeService) { }

  ngOnInit(): void {
    this.collegeService.fetchPost().subscribe()
    this.collegeService.college.subscribe(col =>{ this.colleges = col
    })
  }

}
