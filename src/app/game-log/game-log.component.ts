import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { DataService } from '../data.service';
import { Log } from '../log';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-log',
  templateUrl: './game-log.component.html',
  styleUrls: ['./game-log.component.scss']
})
export class GameLogComponent implements OnInit, AfterViewInit {
  @ViewChildren("logList") logList: QueryList<any>;
  @ViewChild("logFeed", { read: ElementRef }) logFeed: ElementRef;

  Logs: Array<Log> = [];
  CharacterName: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) { 
    this.route.paramMap.subscribe(params => {
      localStorage.setItem('dataServiceId', params.get('dataServiceId'));
      this.dataService.dbUID = params.get('dataServiceId');
      this.dataService.SubscribeToLogs(this.UpdateLogs, this);
    });
  }
  
  ngOnInit() {
    this.CharacterName = localStorage.getItem("characterName");
  }
  
  ngAfterViewInit() {
    this.logList.changes.subscribe(() => {
      this.scrollToBottom();
    });
  }
  
  UpdateLogs(logs, gameLogComponent) {
    gameLogComponent.Logs = logs;
  }
  
  OnUpdateCharacterName(name) {
    this.CharacterName = name;
  }
  
  scrollToBottom() {
    this.logFeed.nativeElement.scrollTo(0, this.logFeed.nativeElement.scrollHeight);
  }
}
