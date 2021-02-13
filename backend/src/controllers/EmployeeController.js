const Employee = require('../models/EmployeeSchema')

module.exports = {
    async store(req, res) {
        const { name, nacionalID, birthDate, admissionDate, journeyLength, email, coordinator, useJourneyControl } = req.body

        let employee = await Employee.findOne({ nacionalID })

        if( !employee ){
            employee = await Employee.create({
                name,
                nacionalID,
                birthDate,
                admissionDate,
                journeyLength,
                email,
                coordinator,
                useJourneyControl
            })
            return res.json(employee);
        }else{
            return res.json({"Transação não completada": "Funcionário Existente"})
        }

        
    }
}