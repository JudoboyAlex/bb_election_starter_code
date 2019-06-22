document.addEventListener("DOMContentLoaded", function() {


    
        axios
        .get("https://bb-election-api.herokuapp.com/")
        .then(response => {
            console.log(response.data);
            
            
            const electionCandidate = document.querySelector('#election');
            
            response.data.candidates.forEach((e) => {
            
            const electionData = document.createElement("li");

            electionData.innerHTML = (`${e.name}: ${e.votes} votes`);
            electionCandidate.appendChild(electionData);    

            const electionForm = document.createElement("form");
            const electionButton = document.createElement("button")
            const electionInput = document.createElement("input");
            
            electionForm.method = "POST";
            electionForm.action = "https://bb-election-api.herokuapp.com/vote";

            electionInput.type = "hidden";
            electionInput.name = "name";
            electionInput.value = e.name;

            electionButton.innerText = `Vote for ${e.name}`

            electionForm.appendChild(electionInput);
            electionForm.appendChild(electionButton);
            electionData.appendChild(electionForm);

            })

        })

       

        document.addEventListener('submit', e => {
            e.preventDefault();

            console.log(e.target.querySelector('input[type=hidden]').value);
              
            axios({
                method: 'POST',
                url: "https://bb-election-api.herokuapp.com/vote",
                data:{name: e.target.querySelector('input[name=name]').value}

                })
                .then(function(response){
                    console.log(response);

            })
            .catch(function(response) {
                     alert('Request Failed');               
        })
    })

        let refreshButton = document.querySelector("#refresh")
        refreshButton.addEventListener('click', () => {
            location.reload();
          })
        
          console.log('hello world!')



    })



    

    // robotForm.addEventListener('submit', function(e){
    //     e.preventDefault();
    //     alert("Sup Alex!")
    //     let url = robotForm.action
    //     let csrf = robotForm.querySelector('input[name=csrfmiddlewaretoken]').value;
    //     // axios post alternative
    //     axios({
    //       method: 'POST',
    //       url: url,
    //       data:{
    //         name: responseForm.querySelector('input[name=name]').value,
    //         address: responseForm.querySelector('input[name=address]').value,
    //         modelNumber: responseForm.querySelector('input[name=model_number]').value
      
    //       },
    //       headers: {"X-CSRFToken": csrf}
    //     })
    //     .then(function(response){
    //       console.log(response);
          
    //     })


 


