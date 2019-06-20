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
            })

        })
    })










