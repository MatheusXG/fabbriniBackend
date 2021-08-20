const Prontuario = require('../models/Prontuario');

module.exports = {

  async update(req, res) {

    const { _id } = req.params
    const data = {
            generalDateTime, 
            generalGroup, 
            generalValue,
            generalImageURL, 

            anthropDateTime,          
            anthropBirthDate,        
            anthropSex,                
            anthropHeigth,
            anthropWeigth,             
            anthropMemo,
            anthropImageURL, 

            consultDateTime,                       
            consultType,               
            consultProfessionalId,     
            consultSpeciality,         
            consultLocal,              
            consultReason,             
            consultHistory,            
            consultExamination,        
            consultHypothesis,         
            consultRecomendations,     
            consultPrescription,       
            consultExamsRequest,       
            consultMedicalCertificate,
            consultImageURL,

            examsType,     
            examsLab,      
            examsMethod,   
            examsValue,    
            examsUnit,     
            examsReference,
            examsReport,
            examsImageURL  
            
          } = req.body;
    
    const pront = await Prontuario.findOneAndUpdate({ paciente_id: _id }, data);  

    return res.json("Salvo com sucesso!")

  },

  async index(req, res) {

    const { _id } = req.params;
    
    const pront = await Prontuario.findOne({ paciente_id: _id })   
    return res.json(pront);

  }
    
};