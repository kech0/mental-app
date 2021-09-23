
export function doctor(name, description, specialization, image){
    this.name = name;
    this.description = description;
    this.specialization = specialization;
    this.image = image;
}
export const doctors= [
    new doctor('Dr. Jack Bryce',`Dr. Bryce is amongst the best addiction psychologist in the part of the world. <br>
    He has had tremendous experience of expertise gained at top hospitals. <br>
    He also has 5 years of experience in Psychology field, especially with those dealing with
    substance abuse.`, 'Addiction', 'doctr1.jpg'),
    new doctor('Dr. Emily VanCamp',` Dr. VanCamp is one of the best financial stress psychologist that we have. <br>
    She has great experience of expertise gained at top hospitals. <br>
    She also has 3 years of experience in Psychology field, especially with those dealing with
    financial constraints.`, 'Financial stress', 'doct2.jpg'),
    new doctor('Dr. Danish Mayal',`Dr. Mayal is one of the top PTSD psychologist we could ever ask for. <br>
    He has experience of expertise gained at top known hospitals. <br>
    He also has 6 years of experience in Psychology field, especially with those dealing with
    PTSD.`, 'PTSD', 'doc3.jpeg'),
    new doctor('Dr.Renee Wilson',`Dr. Wilson is among the best addiction psychologist in this part of the world. <br>
    She is well conversant with mental health with experience of gained at most hospitals. <br>
    She has 8 years of experience in Psychology field, especially with those dealing with
    substance abuse.`, 'Addiction', 'doc4.jpg'),
    new doctor('Dr. Smith Johnson',`Dr. Johnson is one of our top psychologist we have in this hospital. <br>
    He has worked with many psychologists and has gained alot just working with them. <br>
    He has 7 years of experience in Psychology field generally.`, 'Financial stress', 'doct4.jpg'),
    new doctor('Dr. John McLaren',`Dr. McLaren is amongst the best PTSD psychologist in the world. <br>
    He has had remarkable experience of expertise gained at various hospitals. <br>
    He also had 5 years of experience in Psychology field, especially with those dealing with
    PTSD.`, 'PTSD', 'doct5.jpg')
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
                    window.location = './order.html'
                }) 
            }
        }
    })
})