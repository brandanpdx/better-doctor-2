export class Doctors {
  constructor(input) {
    this.input = input;
    this.jsonifiedResponse = '';
  }

  async getFetch(input) {
    try { 
      let doctor = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${input}&location=or-portland&user_key=${process.env.API_KEY}&limit=5`, {
      }); 
      let jsonifiedResponse;
      if (doctor.ok && doctor.status == 200) {
        jsonifiedResponse = await doctor.json();
      } else {
        jsonifiedResponse = false;
      }
      this.jsonifiedResponse = jsonifiedResponse;
    } catch(error) {
      console.warn('Error. API not returning data.');
    }
  }
} 

export class Symptoms {
  constructor(input) {
    this.input = input;
    this.jsonifiedResponse = '';
  }

  async getFetch(input) {
    try { 
      let symptom = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${input}&location=or-portland&user_key=${process.env.API_KEY}&limit=5`, {
      }); 
      let jsonifiedResponse;
      if (symptom.ok && symptom.status == 200) {
        jsonifiedResponse = await symptom.json();
      } else {
        jsonifiedResponse = false;
      }
      this.jsonifiedResponse = jsonifiedResponse;
    } catch(error) {
      console.warn('Error. API not returning data.');
    }
  }
} 

