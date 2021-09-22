
export function doctor(name, description, specialization){
    this.name = name;
    this.description = description;
    this.specialization = specialization;
}
export const doctors= [
    new doctor('Dr. Jack Bryce',`Dr. Bryce is amongst the best addiction psychologist in the part of the world. <br>
    He has had tremendous experience of expertise gained at top hospitals. <br>
    He also has 5 years of experience in Psychology field, especially with those dealing with
    substance abuse.`, 'Addiction'),
    new doctor('Dr. Emily VanCamp',`Dr. Bryce is amongst the best addiction psychologist in the part of the world. <br>
    He has had tremendous experience of expertise gained at top hospitals. <br>
    He also has 5 years of experience in Psychology field, especially with those dealing with
    substance abuse.`, 'PTSD'),
    new doctor('Dr. Jack Bryce',`Dr. Bryce is amongst the best addiction psychologist in the part of the world. <br>
    He has had tremendous experience of expertise gained at top hospitals. <br>
    He also has 5 years of experience in Psychology field, especially with those dealing with
    substance abuse.`, 'Financial stress'),
    new doctor('Dr.Renee Wilson',`Dr. Bryce is amongst the best addiction psychologist in the part of the world. <br>
    He has had tremendous experience of expertise gained at top hospitals. <br>
    He also has 5 years of experience in Psychology field, especially with those dealing with
    substance abuse.`, 'Addiction')

]
$(document).ready(function(){
    const resultDiv = $('#result');
    const resultItemtmpl = resultDiv.html();
    console.log(resultItemtmpl)
    $('#searchForm').on('submit', function(evt){
        evt.preventDefault();
        const specialization = this.specialization.value;
        console.log(specialization)
        const result = doctors.filter(function(doctor){
            return doctor.specialization == specialization
        })
        console.log(result)
        resultDiv.find('div.list-group').html('')
        if(result.length>0){
            for(let i=0; i<result.length; i++){
                const doctor = result[i]
                resultDiv.find('div.list-group').append(resultItemtmpl)
                console.log(resultItemtmpl)
                resultDiv.find('div.list-group div.list-group-item:last h4').html(doctor.name) 
                resultDiv.find('div.list-group div.list-group-item:last strong').html(doctor.specialization) 
                resultDiv.find('div.list-group div.list-group-item:last p').html(doctor.description) 
                resultDiv.find('div.list-group div.list-group-item:last button').on('click', function(){
                    localStorage.setItem('selectedDoctor', JSON.stringify(doctor))
                    window.location = '/order.html'
                }) 
            }
        }
    })
})