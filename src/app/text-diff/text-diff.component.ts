import { Component, OnInit } from '@angular/core';
import * as diff from 'diff';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/filter';

interface TextInput {
  text1: string;
  text2: string;
}

@Component({
  selector: 'app-text-diff',
  templateUrl: './text-diff.component.html',
  styleUrls: ['./text-diff.component.scss']
})
export class TextDiffComponent implements OnInit {

  // form
  public textDiffForm: FormGroup;
  public text1: FormControl;
  public text2: FormControl;

  public textDiff: string;
  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.text1 = new FormControl();
    this.text2 = new FormControl();

    this.textDiffForm = this.formBuilder.group({
      text1: this.text1,
      text2: this.text2
    });

    this.textDiffForm.valueChanges
      .filter((input: TextInput) => !!input.text1 && !!input.text2)
      .subscribe((input: TextInput) => this.calcDiff(input));
  }

  private calcDiff(input: TextInput): void {
    const difference = diff.diffChars(input.text1, input.text2);
    this.textDiff = '';
    difference.forEach(part => {
      const type = part.added ? 'add' : part.removed ? 'remove' : 'none';
      this.textDiff += `<span class="${type}">${part.value}</span>`;
    });
  }

}
