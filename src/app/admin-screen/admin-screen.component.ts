import { Component, OnInit } from '@angular/core';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.less']
})
export class AdminScreenComponent implements OnInit {

  constructor() { }
  faUserShield=faUserShield;
  faMagnifyingGlass=faMagnifyingGlass;
  ngOnInit(): void {
  }

}
