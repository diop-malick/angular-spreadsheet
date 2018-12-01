// adds ALL RxJS statics & operators to Observable
// import 'rxjs/Rx';

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';

// Operators
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
