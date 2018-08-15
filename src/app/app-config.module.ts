import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  minimalQueryLength: number;
  searchApiUrl: string;
  searchParams: object;
}

export const APP_DI_CONFIG: AppConfig = {
    minimalQueryLength: 3,
    searchApiUrl: '/api/search/complex',
    searchParams: {
      'sort': 'popularity',
      'tab': 'questions'
    }
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }
