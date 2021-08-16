import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  allowNewUsername = false;
  usernameCreationStatus = 'No username has been added yet.';
  usernameLabel = ''

  constructor() { }

  ngOnInit(): void {
  }
  onCreateUsername() {
    this.usernameCreationStatus = 'New user has been added: ' + this.usernameLabel;
    this.usernameLabel = '';
    
  }

}
