import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  numberOfTeams: number | '' = '';
  errorMessage: string = '';
  teams: string[][] = [];

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }

  onInputMember(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    this.teams = [];

    if (!this.numberOfTeams || this.numberOfTeams < 1) {
      this.errorMessage = 'Invalid number of teams';
      return;
    }
    this.errorMessage = '';

    const allMembers = [...this.members];
    this.members = [];
    while (allMembers.length) {
      for (let index = 0; index < <number>this.numberOfTeams; index++) {
        if (!allMembers.length) break;
        let randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (this.teams[index]) {
          this.teams[index].push(member);
        } else {
          this.teams[index] = [member];
        }
      }
    }
    console.log(this.teams);
  }
}
