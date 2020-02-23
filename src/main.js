import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctors } from './better-doctor';

// Doctor Search Function
async function doctorSearch(input){

  let doctor = new Doctors(input);


  await doctor.getDoctor(input);

  if (doctor.input) {
    await getDoctors(doctor.jsonifiedResponse);
  } else {
    $('.errors').append('Error! Please input a name!');
  } 
}

function getDoctors(doctor) {
  console.log(doctor);

  if (!doctor.data) {
    $('.errors').append(`Error! The API is returning the following status: ${doctor.status} ${doctor.statusText}.`);
  } else if (doctor.data == 0) {
    $('#showdocsname').html("We did not find any doctors matching your name.");
  } 

  for (let i = 0; i < doctor.data.length; i++) {
    let docname = (`${doctor.data[i].profile.first_name} ${doctor.data[i].profile.last_name}`);

    let docpractice = (`${doctor.data[i].practices[0].name}`);

    let docaddress = (`${doctor.data[i].practices[0].visit_address.street}, ${doctor.data[i].practices[0].visit_address.city}, ${doctor.data[i].practices[0].visit_address.state} ${doctor.data[i].practices[0].visit_address.zip}`);

    let docphone = (`${doctor.data[i].practices[0].phones[0].number}`);

    let newpatients = (`${doctor.data[i].practices[0].accepts_new_patients}`);
    if (newpatients == 'true') {
      newpatients = 'Yes';
    } else {
      newpatients == 'No';
    }

    let website = (`${doctor.data[i].practices[0].website}`);
    if (website == 'undefined') {
      website = "Sorry, this doctor does not have a website available at this time.";
    }

    $('#showdocsname').append('<li>' + docname + '<br>' + docpractice + '<br>' + docaddress + '<br>' + docphone + '<br>' + 'Accepting new patients: ' + newpatients + '<br>' + 'Website: ' + website + '</li>');

  } 
}



// Symptom Search Function
async function symptomSearch(input){

  let symptom = new Doctors(input);

  await symptom.getSymptom(input);

  if (symptom.input) {
    await getSymptoms(symptom.jsonifiedResponse);
  } else {
    $('.errors').append('Error! Please input a symptom!');
  } 
}

function getSymptoms(symptom) {
  console.log(symptom);

  if (!symptom.data) {
    $('.errors').append(`Error! The API is returning the following status: ${symptom.status} ${symptom.statusText}.`);
  } else if (symptom.data == 0) {
    $('#showdocssymptom').html("Sorry. We did not find any doctors that treat your symptoms.");
  } else { 
    for (var i = 0; i < symptom.data.length; i++)
      $('#showdocssymptom').append(` <li> ${symptom.data[i].profile.first_name} ${symptom.data[i].profile.last_name}<br>${symptom.data[i].practices[0].name} <br> Address: ${symptom.data[i].practices[0].visit_address.street}, ${symptom.data[i].practices[0].visit_address.city}, ${symptom.data[i].practices[0].visit_address.state} ${symptom.data[i].practices[0].visit_address.zip} <br> Phone number: ${symptom.data[i].practices[0].phones[0].number} <br> Accepting new patients: ${symptom.data[i].practices[0].accepts_new_patients} </li>` );
  }   
}


$(document).ready(function() {
  $('form#doctor').submit(function(event) {
    event.preventDefault();
    const userDocSearch = $('input#userDocSearch').val();
    $('#showdocsname').empty();
    $('.doctorresult').html('Here is a list of doctors that match the name ' + userDocSearch + '.');
    $('.showdocbyname').show();
    console.log(userDocSearch);

    doctorSearch(userDocSearch);
  });

  $('form#symptom').submit(function(event) {
    event.preventDefault();
    const userSymptomSearch = $('input#symptomsearch').val();
    $('#showdocssymptom').empty();
    $('.symptomresult').html('Here is a list of doctors that have experience with ' + userSymptomSearch + '.');
    $('.showdocbysymptom').show();
    console.log(userSymptomSearch);

    symptomSearch(userSymptomSearch);
  });
});