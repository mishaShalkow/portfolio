import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { db } from 'src/app/models/dbModels';
import { DbServiceService } from 'src/app/service/db-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss'],
})
export class MainWindowComponent implements OnInit {
  itemFromDb: db[];
  fragment: string;
  itemFromDbSubcribe: Subscription;
  aboutMe: string =
    "Мне 26лет, окончил БГАС(Витебский филиал Белорусской государственной академии связи) по специализации 'программное обеспечение'. Имею опыт работы с фреймворком angular. Быстро учусь и отвественно подхожу к реализации проектов.";
  expTxt: string =
    'Прошел курс по Frontend разработке от SkillFactory. Есть небольшие SPA проекты с использованием фреймворка angular. Верстал лендинги по макету с Figma.';
  constructor(
    private service: DbServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.getItem().subscribe((data) => {
      this.itemFromDb = data;
    });
  }

  ngOnDestroy() {
    if (this.itemFromDbSubcribe) this.itemFromDbSubcribe.unsubscribe;
  }
}
