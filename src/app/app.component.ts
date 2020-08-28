import { Component } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';

const styles = (theme: ThemeVariables) => ({
  '@global': {
    body: {
      background: theme.background.default,
      color: theme.text.default,
      fontFamily: theme.typography.fontFamily,
      margin: '1em',
      direction: theme.direction
    }
  },
  root: {
    button: {
      margin: '.5em 0',
      marginBefore: '1em'
    }
  }
});

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  name = 'Angular';
  classes = this.theme.addStyleSheet(styles);
  private _currentTheme = 'minima-light';
  constructor(
    private theme: LyTheme2
  ) { }

  toggleTheme() {
    if (this._currentTheme === 'minima-light') {
      this._currentTheme = 'minima-dark';
      this.theme.setTheme(this._currentTheme);
    } else {
      this._currentTheme = 'minima-light';
      this.theme.setTheme(this._currentTheme);
    }
  }
}
