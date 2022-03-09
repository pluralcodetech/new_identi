const getSigndUp = document.getElementById("signup");

getSigndUp.addEventListener("click", (event) => {
    event.preventDefault();

    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.querySelector(".phone").value;
    let business = document.getElementById("business").value;
    let category = document.getElementById("busCat").value;

    let getCode = phone.toString();
    let countCode = getCode.slice(0,3)

    // let formData = new FormData();

    // formData.append("contactName", name);
    // formData.append("email", email);
    // formData.append("phoneNumber", phone);
    // formData.append("businessName", business);
    // formData.append("businessCategory", category);
    // formData.append("countryCode", countCode);


    let signOptions = {
        method: "POST",
        headers: new Headers({
          'accept': 'application/json',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            "contactName": name,
            "email": email,
            "phoneNumber" : phone,
            "businessName": business,
            "businessCategory": category,
            "countryCode": countCode
        })
    };

    fetch("http://162.241.159.59:9090/v1/user/sign-up", signOptions)
    .then(response => response.text())
    .then(result => console.log(result.status))
    .catch(error => console.log('error', error));
})



