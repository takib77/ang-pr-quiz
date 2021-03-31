import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Answer } from '../model/answer';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  dataSource: string = 'http://localhost:3000/questions';
  questionList$: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);

  answers: Answer[] = [
    {
      id: 1,
      content: 'Extirpation of Matter from Left Toe Phalanx, Open Approach',
      correct: false
    }, {
      id: 2,
      content: 'Change Brace on Right Lower Arm',
      correct: false
    }, {
      id: 3,
      content: 'Drainage of Right Lower Eyelid, External Approach',
      correct: true
    }, {
      id: 4,
      content: 'Fluoroscopy of Right Knee using Low Osmolar Contrast',
      correct: true
    }, {
      id: 5,
      content: 'Dilate R Hand Art w 4+ Intralum Dev, Perc Endo',
      correct: true
    }, {
      id: 6,
      content: 'Aerobic Cap/Endur Assessment of Circ Body using Prosthesis',
      correct: true
    }, {
      id: 7,
      content: 'Excision of Left Glenoid Cavity, Open Approach',
      correct: true
    }, {
      id: 8,
      content: 'Revision of Drainage Device in Omentum, Perc Endo Approach',
      correct: false
    }, {
      id: 9,
      content: 'Bypass Thor Aorta Asc to Subclav w Autol Vn, Perc Endo',
      correct: false
    }, {
      id: 10,
      content: 'Transfer Accessory Nerve to Facial Nerve, Open Approach',
      correct: false
    }, {
      id: 11,
      content: 'Drainage of Left Lesser Saphenous Vein, Perc Approach',
      correct: true
    }, {
      id: 12,
      content: 'Monitoring of Products of Conception, Cardiac Rhythm, Endo',
      correct: true
    }, {
      id: 13,
      content: 'Restriction of Cervix, Open Approach',
      correct: false
    }, {
      id: 14,
      content: 'Excision of Lung Lingula, Percutaneous Endoscopic Approach',
      correct: true
    }, {
      id: 15,
      content: 'CT Scan of R Calcaneus using Oth Contrast',
      correct: false
    }, {
      id: 16,
      content: 'Bypass L Ventricle to R Pulm Art w Autol Vn, Open',
      correct: false
    }, {
      id: 17,
      content: 'Destruction of Right Upper Lobe Bronchus, Perc Endo Approach',
      correct: false
    }, {
      id: 18,
      content: 'Supplement Left Basilic Vein with Nonaut Sub, Perc Approach',
      correct: false
    }, {
      id: 19,
      content: 'Destruction of Lesser Omentum, Open Approach',
      correct: false
    }, {
      id: 20,
      content: 'Create Mitral Valve from Comn AV Valve w Nonaut Sub, Open',
      correct: true
    }, {
      id: 21,
      content: 'Drainage of Urethra with Drainage Device, Open Approach',
      correct: true
    }, {
      id: 22,
      content: 'Removal of Synth Sub from R Pleural Cav, Perc Endo Approach',
      correct: false
    }, {
      id: 23,
      content: 'Repair Ascending Colon, Open Approach',
      correct: false
    }, {
      id: 24,
      content: 'Extraction of Vagus Nerve, Percutaneous Endoscopic Approach',
      correct: false
    }, {
      id: 25,
      content: 'Release Left Rib, Percutaneous Approach',
      correct: true
    }
  ]

  constructor(
    private http: HttpClient
  ) { }

  getAllQuestion(): void {
    this.http.get<Question[]>(this.dataSource).subscribe(
      questions => this.questionList$.next(questions)
    );
  }

  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.dataSource}/${id}`);
  }

  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.dataSource, question);
  }

  updateQuestion(question: Question): Observable<Question> {
    return this.http.patch<Question>(`${this.dataSource}/${question.id}`, question);
  }

  removeQuestion(question: Question): Observable<Question> {
    return this.http.delete<Question>(`${this.dataSource}/${question.id}`);
  }

}
