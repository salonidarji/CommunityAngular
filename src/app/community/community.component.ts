import { Component, OnInit } from '@angular/core';
import { CommunityDataService } from '../services/community-data.service';
import { Community_User_Category_Class } from '../shared/community_user_cat';
import { Router } from '@angular/router';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  arr: Community_User_Category_Class[] = [];
  arr1: Community_User_Category_Class[] = this.arr;
   str = '';
  constructor(private _data: CommunityDataService, private _router: Router) {}

  ngOnInit() {
    this._data.getAllCommunity().subscribe(
      (data: Community_User_Category_Class[]) => {
        this.arr = data;
      },
      function(err) {
        alert(err);
      },
      function() {
        console.log('finally');
      }
    );
  }

  onClick() {
    this._router.navigate(['/todo']);
  }

  search(value: string) {
    console.log(value);
    this.arr = this.arr.filter(x => x.comm_name.startsWith(value));
  }

  giveName(name: string) {
    this.str = name;
  }
}
