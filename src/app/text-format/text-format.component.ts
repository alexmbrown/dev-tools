import { Component, OnInit } from '@angular/core';
import { pd } from 'pretty-data';
import { SyntaxHighlightPipe } from '../shared/pipes/syntax-highlight.pipe';
import { LocalStorageService } from '../core/services/local-storage.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import { ConfirmationDialogComponent } from '../shared/components/confirmation-dialog/confirmation-dialog.component';

interface FormattedText {
  label?: string;
  text?: string;
  code?: string;
}

const STORAGE_KEY = 'format-text';

@Component({
  selector: 'dt-text-format',
  templateUrl: './text-format.component.html',
  styleUrls: ['./text-format.component.scss']
})
export class TextFormatComponent implements OnInit {

  public codeFormat: string;
  public newPage: FormattedText = {};
  public pages: FormattedText[] = [];

  constructor(
    private highlight: SyntaxHighlightPipe,
    private storage: LocalStorageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    const pages: FormattedText[] = this.storage.getObj(STORAGE_KEY) as FormattedText[];
    if (pages) {
      this.pages = pages;
    }
  }

  public format(): void {
    if (this.codeFormat) {
      try {
        switch (this.codeFormat) {
          case 'CSS':
            this.newPage.code = this.highlight.transform(pd.css(this.newPage.text), 'css');
            break;
          case 'JSON':
            this.newPage.code = this.highlight.transform(pd.json(this.newPage.text), 'json');
            break;
          case 'XML':
            this.newPage.code = this.highlight.transform(pd.xml(this.newPage.text), 'xml');
            break;
        }
      } catch (err) {
        this.snackBar.open('Error parsing code.');
      }
    }
  }

  public delete(index: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Delete',
        msg: 'Are you sure?'
      }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(result);
      if (result) {
        this.pages.splice(index, 1);
        this.storage.set(STORAGE_KEY, this.pages);
      }
    });
  }

  public save(): void {
    const dialogRef = this.dialog.open(SaveDialogComponent);

    dialogRef.afterClosed().subscribe((label: string) => {
      this.pages.push(Object.assign({label}, this.newPage));
      this.clear();
      this.storage.set(STORAGE_KEY, this.pages);
    });
  }

  public clear(): void {
    delete this.newPage.code;
    delete this.newPage.text;
  }

  public isEditView(): boolean {
    return this.newPage && typeof this.newPage.code === 'undefined';
  }

}
