import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctors } from './better-doctor';
import { Symptoms } from './better-doctor';

// Doctor Search Function
async function doctorsearch(input){

  let doctor = new Doctors (input);

  await doctor.getFetch(input);

  if (doctor.status === false) {
    $('.errors').append('Error! Status not found');
  }
  if( doctor.input == '') {
    $('.errors').append('Error! Please input a name!');
  } 

  function getDoctors(doctor) {
    console.log(doctor);

    if (doctor.data == 0) {
      $('#showdocsname').html("We did not find any doctors matching your name.");
    } 
    else { 
      for (var i = 0; i < doctor.data.length; i++)
        $('#showdocsname').append(` <li> ${doctor.data[i].profile.first_name} ${doctor.data[i].profile.last_name}<br>${doctor.data[i].practices[0].name} <br> Address: ${doctor.data[i].practices[0].visit_address.street}, ${doctor.data[i].practices[0].visit_address.city}, ${doctor.data[i].practices[0].visit_address.state} ${doctor.data[i].practices[0].visit_address.zip} <br> Phone number: ${doctor.data[i].practices[0].phones[0].number} <br> Accepting new patients: ${doctor.data[i].practices[0].accepts_new_patients} </li>` );
    } 
  }

  await getDoctors(doctor.jsonifiedResponse);
}

// Symptom Search Function
async function symptomsearch(input){

  let symptom = new Symptoms(input);

  await symptom.getFetch(input);

  if (symptom.status === false) {
    $('.errors').append('Error! Status not found');
  }
  if( symptom.input === '') {
    $('.errors').append('Error! Please input a name!');
  } 

  function getSymptoms(symptom) {
    console.log(symptom);

    if (symptom.data == 0) {
      $('#showdocssymptom').html("Sorry. We did not find any doctors that treat your symptoms.");
    } 
    else { 
      for (var i = 0; i < symptom.data.length; i++)
        $('#showdocssymptom').append(` <li> ${symptom.data[i].profile.first_name} ${symptom.data[i].profile.last_name}<br>${symptom.data[i].practices[0].name} <br> Address: ${symptom.data[i].practices[0].visit_address.street}, ${symptom.data[i].practices[0].visit_address.city}, ${symptom.data[i].practices[0].visit_address.state} ${symptom.data[i].practices[0].visit_address.zip} <br> Phone number: ${symptom.data[i].practices[0].phones[0].number} <br> Accepting new patients: ${symptom.data[i].practices[0].accepts_new_patients} </li>` );
    }   
  }
  await getSymptoms(symptom.jsonifiedResponse);
}



$(document).ready(function() {
  $('form#doctor').submit(function(event) {
    event.preventDefault();
    const userDocSearch = $('input#userDocSearch').val();
    $('#showdocsname').empty();
    $('.doctorresult').html('Here is a list of doctors that match the name ' + userDocSearch + '.');
    $('.showdocbyname').show();
    console.log(userDocSearch);

    doctorsearch(userDocSearch);
  });

  $('form#symptom').submit(function(event) {
    event.preventDefault();
    const userSymptomSearch = $('input#symptomsearch').val();
    $('#showdocssymptom').empty();
    $('.symptomresult').html('Here is a list of doctors that have experience with ' + userSymptomSearch + '.');
    $('.showdocbysymptom').show();
    console.log(userSymptomSearch);

    symptomsearch(userSymptomSearch);
  });

});