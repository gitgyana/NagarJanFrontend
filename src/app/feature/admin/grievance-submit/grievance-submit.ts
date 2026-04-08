import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-grievance-submit',
    imports: [
        FormsModule
    ],
    templateUrl: './grievance-submit.html',
    styleUrl: './grievance-submit.css',
})
export class GrievanceSubmit {

    selectedSource: 'TEXT' | 'EMAIL' | 'PHONE' = 'TEXT';

    formData = {
        content: '',
        title: '',
        locationId: 1
    };

    constructor(private http: HttpClient) {
    }

    selectSource(source: 'TEXT' | 'EMAIL' | 'PHONE') {
        this.selectedSource = source;
    }

    submit() {
        const payload = {
            source: this.selectedSource,
            content: this.formData.content,
            title: this.formData.title,
            locationId: this.formData.locationId
        };

        this.http.post('http://localhost:8080/api/grievance', payload, {
            responseType: 'text'
        }).subscribe({
            next: () => alert('Submitted successfully'),
            error: (err) => console.error(err)
        });
    }
}
