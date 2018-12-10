import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChoiceComponent} from './beans/choice/choice.component';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  choices: Array<ChoiceComponent> = [];
  nbChoice: number;
  showCoef: boolean;
  finalChoice : string;
  showChoice : boolean;

  @Input()
  choice: ChoiceComponent;

  @Output()
  change: EventEmitter<MatSlideToggleChange>;

  ngOnInit(): void {
    this.choices = [];
    this.nbChoice = 0;
    this.nbChoice++;
    let firstChoice = new ChoiceComponent;
    firstChoice.id = this.nbChoice;
    this.choices[this.nbChoice - 1] = firstChoice;
    this.showChoice = false;
  }

  onSlideChange(ob: MatSlideToggleChange) {
    ob.checked ? this.showCoef = true : this.showCoef = false;

    if (!this.showCoef){
      for( let h = 0 ; h < this.choices.length ; h++) {
        this.choices[h].coefficient = null;
      }
    }
  }

  onAddChoice(choice: ChoiceComponent) {

    this.nbChoice++;
    let newChoice = new ChoiceComponent;
    newChoice.id = this.nbChoice;
    this.choices[this.nbChoice - 1] = newChoice;

  }

  onSupressChoice(id) {
    console.log(id);
    console.log(this.choices);
    // var realId = id - 1;
    this.choices.splice(this.choices.indexOf(id), 1);
    this.nbChoice--;
  }

  onCalculate() {

    let sumCoef = 0;
    let coefList: Array<number> = [];
    // Sum of the coeffs
    for (let j = 0 ; j < this.choices.length ; j++) {
      this.choices[j].coefficient = +this.choices[j].coefficient;
      sumCoef = sumCoef + this.choices[j].coefficient;
    }

    if (!isNaN(sumCoef) && sumCoef != 0) {
      // We are on a coefficiented list
      // First we set all coef at list at 1
      for( let h = 0 ; h < this.choices.length ; h++) {
        if(isNaN(this.choices[h].coefficient)) {
          this.choices[h].coefficient = 1;
        }
      }

      let resultListSize: number = 0;

      for (let k = 0 ; k < this.choices.length ; k++) {
        if (!isNaN(this.choices[k].coefficient) && this.choices[k].coefficient != null) {
          for (let l = 0 ; l < this.choices[k].coefficient ; l++) {
            coefList[resultListSize] = this.choices[k].id;
            resultListSize ++ ;
          }
        }
      }
      // Random on coefList
      let result = Math.ceil(Math.random() * (coefList.length));
      let resultId = coefList[result - 1];
      this.finalChoice = this.choices[resultId - 1].description;
      this.showChoice = true;

    } else {
      // We are on a non coefficiented list
      let result = Math.ceil(Math.random() * (this.choices.length));
      this.finalChoice = this.choices[result - 1].description;
      if(this.choices[result - 1].description != "" && this.choices[result - 1].description != undefined){
        this.showChoice = true;
      }

    }

  }

  onReset() {
    this.choices = [];
    this.nbChoice = 0;
    this.nbChoice++;
    let firstChoice = new ChoiceComponent;
    firstChoice.id = this.nbChoice;
    this.choices[this.nbChoice - 1] = firstChoice;
    this.finalChoice = "";
    this.showChoice = false;
  }

}
