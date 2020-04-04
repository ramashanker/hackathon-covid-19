import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RxStompService}from '@stomp/ng2-stompjs';
import { Chart } from 'chart.js';
import { VitalData } from './models/VitalData';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public start: string;
    public finish: string;
    chart = []
    healthChart = []
    public count:number = 0
    public patientId:String
    public caseId:String
    private subscription;
    bodyTemp = [];
    pulseRate =[];
    respRate = [];
    bloodPress = [];
    spo2 = [];
    timestamp = [];
    vitals = [];
    private patient_base_url= 'https://localhost:5656/patient/';
    public constructor(private http: HttpClient, private rxStompService: RxStompService) {

     }


    ngOnInit() {
        this.rxStompService.watch('/topic/patient').subscribe(message => {
            console.log(JSON.parse(message.body));
            const vitaldata: VitalData = JSON.parse(JSON.parse(message.body));
            this.bodyTemp.push(vitaldata.bodyTemp);
            this.pulseRate.push(vitaldata.pulseRate);
            this.respRate.push(vitaldata.respRate);
            this.bloodPress.push(vitaldata.bloodPress);
            this.spo2.push(vitaldata.spo2);
            this.timestamp.push(vitaldata.timestamp);
            this.VitalsDataGraph()
          });
      }

      selectedCases(value: any){

      this.VitalsDataGraph();

      }

      selectedSingleTrip(value: any){
        console.log(value)
        this.clearAllVitalData()
        this.getdataforthepatient(value);
      }

      public getdataforthepatient(value){
        this.getSinglePatientData(value).subscribe(data => {
        });
      }

      public getSinglePatientData(value): Observable<any> {
        const httpOptions = {
          headers: new HttpHeaders({
            'x-api-key': '5DdN9rtc0uagG31byhYRl3zTSYgnClFu3xIdO1vZ'
          })
        };
        return this.http.get(this.patient_base_url+this.patientId,httpOptions);
        }

        public streamPatientData(value){
            /*const vitaldata: VitalData = JSON.parse(message.body);
            this.bodyTemp.push(vitaldata.bodyTemp);
            this.pulseRate.push(vitaldata.pulseRate);
            this.respRate.push(vitaldata.bodyTemp);
            this.bloodPress.push(vitaldata.respRate);
            this.spo2.push(vitaldata.spo2);
            this.timestamp.push(vitaldata.bodyTemp);
            this.VitalsDataGraph()*/
        }

     VitalsDataGraph(){
        this.healthChart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.timestamp,
            datasets: [
              {
                data: this.bodyTemp,
                label: "BodyTemp",
                borderColor: "#800000",
                fill: false
              },
              {
                data: this.pulseRate,
                label: "PulseRate",
                borderColor: "#FF0000",
                fill: false
              },
              {
                data: this.respRate,
                label: "RespirationRate",
                borderColor: "#FFA500",
                fill: false
              },
              {
                data: this.bloodPress,
                label: "Bloodpressure",
                borderColor: "#FFFF00",
                fill: false
              },
              {
                data: this.spo2,
                label: "spo2",
                borderColor: "#ffcc00",
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
     }
     clearAllVitalData() {
      this.vitals=[];
    }

    }

