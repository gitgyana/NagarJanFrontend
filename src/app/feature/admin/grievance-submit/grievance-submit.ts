import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-grievance-submit',
    imports: [FormsModule],
    templateUrl: './grievance-submit.html',
    styleUrl: './grievance-submit.css',
})
export class GrievanceSubmit {

    selectedSource = 'TEXT';

    formData = {
        content: '',
        title: '',
        email: '',
        locationId: 1
    };

    isRecording = false;
    transcript = '';

    constructor(private router: Router, private http: HttpClient) {}

    selectSource(source: string) {
        this.selectedSource = source;

        this.formData = {
            content: '',
            title: '',
            email: '',
            locationId: 1
        };

        this.transcript = '';
        this.isRecording = false;
    }

    startRecording() {
        const SpeechRecognition =
            (window as any).webkitSpeechRecognition ||
            (window as any).SpeechRecognition;

        if (!SpeechRecognition) {
            alert('Speech Recognition not supported');
            return;
        }

        const recognition = new SpeechRecognition();

        recognition.lang = 'en-IN';
        recognition.interimResults = false;

        this.isRecording = true;
        recognition.start();

        recognition.onresult = (event: any) => {
            this.transcript = event.results[0][0].transcript;
            this.isRecording = false;
        };

        recognition.onerror = () => {
            this.isRecording = false;
            alert('Recording failed');
        };
    }

    detectType(text: string): string {
        const t = text.toLowerCase();

        if (t.includes('water') || t.includes('pipe') || t.includes('leak')) return 'WATER';
        if (t.includes('road') || t.includes('pothole')) return 'ROADS';
        if (t.includes('electric') || t.includes('power')) return 'ELECTRICITY';
        if (t.includes('garbage') || t.includes('waste')) return 'SANITATION';

        return 'UNKNOWN';
    }

    submit() {
        let content = this.formData.content;

        if (this.selectedSource === 'PHONE') {
            content = this.transcript;
        }

        const detectedType = this.detectType(content);

        const payload = {
            source: this.selectedSource,
            content,
            title: this.formData.title || detectedType,
            locationId: this.formData.locationId,
            detectedType
        };

        this.http.post('/api/grievance', payload, {
            responseType: 'text'
        }).subscribe({
            next: () => alert('Submitted successfully'),
            error: (err) => console.error(err)
        });

        this.router.navigate(['/grievance-submit']);
    }
}
