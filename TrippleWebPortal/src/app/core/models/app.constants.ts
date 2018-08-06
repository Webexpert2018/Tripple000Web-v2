import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class Configuration {
    public Server = environment.url;
    public ApiUrl = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}