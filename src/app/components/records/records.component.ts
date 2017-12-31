import { Component, OnInit } from '@angular/core';
import { Record } from '../../model/record';
import { RecordService } from '../../providers/record.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  records: Record[];

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.getRecords();
  }

  getRecords(): void {
    this.records = this.recordService.getRecords();
  }
}
