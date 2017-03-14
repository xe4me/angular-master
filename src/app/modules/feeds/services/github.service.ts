import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
@Injectable()
export class GithubService {
    constructor(public http: Http) {

    }

    getUsers(user) {
        return this.http.get('http://api.github.com/users/'+user);
    }
}