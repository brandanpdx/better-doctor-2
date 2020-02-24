export class Doctors {
  constructor(input) {
    this.input = input;
    this.jsonifiedResponse = '';
  }

  async getDoctor(input) {
    try { 
      let doctor = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${input}&location=or-portland&user_key=${process.env.API_KEY}&limit=5`, {
      }); 
      let jsonifiedResponse;
      if (doctor.ok && doctor.status == 200) {
        jsonifiedResponse = await doctor.json();
      } else {
        jsonifiedResponse = doctor;
      }
      this.jsonifiedResponse = jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }

  async getSymptom(input) {
    try { 
      let symptom = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${input}&location=or-portland&user_key=${process.env.API_KEY}&limit=5`, {
      }); 
      let jsonifiedResponse;
      if (symptom.ok && symptom.status == 200) {
        jsonifiedResponse = await symptom.json();
      } else {
        jsonifiedResponse = symptom;
      }
      this.jsonifiedResponse = jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}


