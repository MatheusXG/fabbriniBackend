const User = require('../models/User');
const Prontuario = require('../models/Prontuario');

module.exports = {

    async store(req, res)  {

        const { name, email, cpf, 
            
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
        
        }  = req.body;

        let user = await User.findOne({ cpf });

        if (!user) {
            
            user = await User.create( {name, email, cpf} );

            const paciente_id = user._id

            const prontuario = await Prontuario.create( {paciente_id, name, email, cpf, generalDateTime, 
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

            });
            console.log(prontuario)

        }

        return res.json(user)

    },


    async index(req, res){

        const user = await User.find()
        
        return res.json(user)
    },


};