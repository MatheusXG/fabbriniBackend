const mongoose = require('mongoose');

const ProntSchema = new mongoose.Schema({
  paciente_id: String,
  name: String,
  email: String,
  cpf: String,

  generalDateTime: {
      type: Date,
      default: Date.now,
  },
  generalGroup: String,
  generalValue: String,
  generalImageURL: String,
  
  anthropDateTime:  {
      type: Date,
      default: Date.now,
  },          
  anthropBirthDate:  {
      type: Date,
      default: Date.now,
  },
  anthropSex: String,                
  anthropHeigth: String,
  anthropWeigth: String,           
  anthropMemo: String,
  anthropImageURL: String,

  consultDateTime:  {
      type: Date,
      default: Date.now,
  },                   
  consultType: String,                
  consultProfessionalId: String,     
  consultSpeciality: String,         
  consultLocal: String,              
  consultReason: String,             
  consultHistory: String,            
  consultExamination: String,        
  consultHypothesis: String,         
  consultRecomendations: String,     
  consultPrescription: String,        
  consultExamsRequest: String,       
  consultMedicalCertificate: String,
  consultImageURL: String,

  examsType: String,
  examsLab: String,
  examsMethod: String,
  examsUnit: String,
  examsReference: String,
  examsReport: String,
  examsImageURL: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Prontuario', ProntSchema);
