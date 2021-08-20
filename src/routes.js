const { Router } = require('express');
const routes = Router();
const cors = require('cors');

const multer = require('multer'); //Upload
const multerConfig = require('./config/multer'); //Upload

const Prontuario = require('./models/Prontuario'); 

const UserController = require('./controllers/UserController');
const ProntuarioController = require('./controllers/ProntuarioController');

// routes.post('/', multer(multerConfig).single("file"), async (req, res) => {
//   // try { 
//   //   console.log(req.file)  
//   // } 
//   // catch (error) {
//   //   console.log(error)  
  
//   const 
//   { 
//     generalDateTime, 
//     generalGroup, 
//     generalValue,
//     anthropDateTime,          
//     anthropBirthDate,        
//     anthropSex,                
//     anthropHeigth,             
//     anthropMemo,   
//     consultDateTime,                       
//     consultType,               
//     consultProfessionalId,     
//     consultSpeciality,         
//     consultLocal,              
//     consultReason,             
//     consultHistory,            
//     consultExamination,        
//     consultHypothesis,         
//     consultRecomendations,     
//     consultPrescription,       
//     consultExamsRequest,       
//     consultMedicalCertificate,
//     examsType,     
//     examsLab,      
//     examsMethod,   
//     examsValue,    
//     examsUnit,     
//     examsReference,
//     examsReport, 
//   } = req.body;

//   const pront = await Prontuario.create({
//     generalDateTime, 
//     generalGroup, 
//     generalValue,
//     anthropDateTime,          
//     anthropBirthDate,        
//     anthropSex,                
//     anthropHeigth,             
//     anthropMemo,   
//     consultDateTime,                       
//     consultType,               
//     consultProfessionalId,     
//     consultSpeciality,         
//     consultLocal,              
//     consultReason,             
//     consultHistory,            
//     consultExamination,        
//     consultHypothesis,         
//     consultRecomendations,     
//     consultPrescription,       
//     consultExamsRequest,       
//     consultMedicalCertificate,
//     examsType,     
//     examsLab,      
//     examsMethod,   
//     examsValue,    
//     examsUnit,     
//     examsReference,
//     examsReport,
//   });
//   console.log(pront);
//   return res.json(pront);

// });




routes.get('/prontuarios', UserController.index);
routes.post('/users', UserController.store);
routes.get('/editar/prontuario/:_id', ProntuarioController.index);
routes.get('/vizualizar/prontuario/:_id', ProntuarioController.index);
routes.put('/editar/prontuario/:_id', ProntuarioController.update);

// routes.post('/', ProntuarioController.store);

module.exports = routes;
