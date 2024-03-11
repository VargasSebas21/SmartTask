import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public states: Array<{ state: string, deathCount: number, population: number, province: string }> = []
  public data: any;
  public options: any;
  private fileContent: string = '';
  private csvData: string[][] = [];

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.fileContent = reader.result as string;
      this.parseCSV();
    };
    reader.readAsText(file);
  }

  private parseCSV() {
    const rows = this.fileContent.split('\n');
    this.csvData = rows.map(row => row.split(','));
    this.csvData.forEach((columns, index) => {
      if (index > 0) {


        this.states.push({
          province: columns[5],
          state: columns[6],
          population: +columns[13],
          deathCount: columns.slice(14).reduce((acc, curr) => {
            return acc + (+curr);

          }, 0)
        })
      }
    })
    this.states.sort((a, b) => a.deathCount > b.deathCount ? -1 : 1)
    this.states[0] // highest death count
    this.states[this.states.length - 1] // lowest death count
    console.log(this.states);
    this.createChart();
  }

  private createChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    const data = this.states.reduce((acc: any, curr) => {
      if (acc[curr.state]) {
        acc[curr.state] += curr.deathCount;
      } else {
        acc[curr.state] = curr.deathCount;
      }
      return acc;
    }, {})
    const colors = Object.values(data).map(() => this.generateRandomColor());
    this.data = {
      labels: Object.keys(data),
      datasets: [
        {
          data: Object.values(data),
          backgroundColor: colors,
          hoverBackgroundColor: colors,
        }
      ]
    };


    this.options = {
      cutout: '30%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }
  private generateRandomColor() {

    // Genera componentes de color aleatorios
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Convierte los componentes de color en formato hexadecimal
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    // Combina los componentes de color en un color hexadecimal
    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    return hexColor;
  }
}