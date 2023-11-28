import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { db } from 'src/app/models/dbModels';
import { DbServiceService } from 'src/app/service/db-service.service';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss'],
})
export class MainWindowComponent implements OnInit {
  itemFromDb: db[];
  itemFromDbSubcribe: Subscription;
  constructor(private service: DbServiceService) {}

  ngOnInit() {
    this.service.getItem().subscribe((data) => {
      this.itemFromDb = data;
    });
  }

  ngOnDestroy() {
    if (this.itemFromDbSubcribe) this.itemFromDbSubcribe.unsubscribe;
  }
}
