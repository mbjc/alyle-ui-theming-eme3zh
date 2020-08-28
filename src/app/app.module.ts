import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  LyThemeModule,
  LyCommonModule,
  PartialThemeVariables,
  LY_THEME,
  LY_THEME_GLOBAL_VARIABLES
  } from '@alyle/ui';

import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

import { LyButtonModule } from '@alyle/ui/button';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// Here we extend the two themes to be able to change their variables.

/**
 * For light theme
 * Theme name = minima-light
 */
export class CustomMinimaLight extends MinimaLight {
  primary = {
    default: '#2196f3',
    contrast: '#fff'
  };
  accent = {
    default: '#e91e63',
    contrast: '#fff'
  };
}

/**
 * For dark theme
 * Theme name = minima-dark
 */
export class CustomMinimaDark extends MinimaDark {
  primary = {
    default: '#9C27B0',
    contrast: '#fff'
  };
  accent = {
    default: '#69F0AE',
    contrast: '#202020'
  };
}

/**
 * Global variables
 * This replaces the variables to all the themes,
 * you can also add new variables
 */
export class GlobalVariables implements PartialThemeVariables {
  SublimeLight = {
    default: `linear-gradient(135deg, ${'#FC5C7D'} 0%,${'#6A82FB'} 100%)`,
    contrast: '#fff',
    shadow: '#B36FBC'
  }; // demo: <button ly-button raised bg="SublimeLight">Button</button>
  button = {
    root: {
      borderRadius: '2em'
    }
  };
}


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-light'),
    LyButtonModule
  ],
  declarations: [
    AppComponent,
    HelloComponent
  ],
  providers: [
    { provide: LY_THEME, useClass: CustomMinimaLight, multi: true },
    { provide: LY_THEME, useClass: CustomMinimaDark, multi: true },
    { provide: LY_THEME_GLOBAL_VARIABLES, useClass: GlobalVariables }
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
