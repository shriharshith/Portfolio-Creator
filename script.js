//alert("loading");

//Education field
$(document).ready(function() {
    // Add Education button click
    $('#addEducation').click(function() {
      var $educationFields = $('#educationFields');
      var $newEducation = $educationFields.children('.education-form').first().clone();
      $newEducation.find('input').val('');
      $educationFields.append($newEducation);
    });

    // Remove Education button click
    $('#removeEducation').click(function() {
      var $educationFields = $('#educationFields');
      if ($educationFields.children('.education-form').length > 1) {
        $educationFields.children('.education-form').last().remove();
      }
    });
  });



//test repaeat education



// form repeater 




function addNewWEField(){
    //console.log("adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter-here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter-here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating CV

function generateCV(){
    //console.log("generating cv");
    let nameField = document.getElementById("nameField").value;
    let NameT1 = document.getElementById("NameT1");
    NameT1.innerHTML = nameField;

    document.getElementById("NameT2").innerHTML = nameField;
   
  

    //phone

    document.getElementById("PhoneT").innerHTML = document.getElementById(
        "phoneField"
    ).value;

    //mail

    document.getElementById("MailT").innerHTML = document.getElementById(
        "mailField"
    ).value;

    document.getElementById("ContactMailT").innerHTML = document.getElementById(
        "mailField"
    ).value;
    //DOB

    document.getElementById("DobT").innerHTML = document.getElementById(
        "dobField"
    ).value;
    //age
    document.getElementById("AgeT").innerHTML = document.getElementById(
        "ageField"
    ).value;
    
    //address
    document.getElementById("AddressT").innerHTML = document.getElementById(
        "addressField"
    ).value;
    
    //fb
    document.getElementById("fbLinkT").href = document.getElementById(
        "fbField"
    ).value;
    //insta
    document.getElementById("instaLinkT").href = document.getElementById(
        "instaField"
    ).value;
    //twitter
    document.getElementById("twitterLinkT").href = document.getElementById(
        "twitterField"
    ).value;

    //linked in
    var linkedinLink =  document.getElementById(
        "linkedField"
    ).value;
    document.getElementById("linkedinLinkT").href = linkedinLink;
    //linkedin link in about
    document.getElementById("linkedinLinkT2").href = document.getElementById(
        "linkedField"
    ).value;
    document.getElementById("linkedinLinkT2").innerHTML = document.getElementById(
        "linkedField"
    ).value;

    //About
    document.getElementById("AboutT").innerHTML = document.getElementById(
        "aboutField"
    ).value;
    //Highest Degree
    document.getElementById("High-DegreeT").innerHTML = document.getElementById(
        "high-degree"
    ).value;

    // ************************  skills  ***********************************
    

    function calculateDynamicValue() {
        // dynamic value calculation logic here
        var inputVal = document.getElementById( "skillsvalueField" ).value;
        return inputVal; // Example dynamic value
      }

    // Select the progress bar element
    const progressBar = document.querySelector(".progress-bar");

    // Select the skill percentage element
    const skillPercentage = document.querySelector("#SkillValue1");

    // Calculate the dynamic value
    const dynamicValue = calculateDynamicValue();

    // Update the skill percentage text
    skillPercentage.textContent = dynamicValue + "%";

    // Set the aria-valuenow attribute
    progressBar.setAttribute("aria-valuenow", dynamicValue.toString());

    // Update the width of the progress bar
    progressBar.style.width = dynamicValue + "%";

    document.getElementById("SkillName1").innerHTML = document.getElementById(
        "skillsnameField"
    ).value;
    



    function calculateDynamicValue2() {
        // dynamic value calculation logic here
        var inputVal2 = document.getElementById( "skillsvalueField2" ).value;
        return inputVal2; // Example dynamic value
      }

    // Select the progress bar element
    const progressBar2 = document.querySelector("#progress-bar2");

    // Select the skill percentage element
    const skillPercentage2 = document.querySelector("#SkillValue2");

    // Calculate the dynamic value
    const dynamicValue2 = calculateDynamicValue2();

    // Update the skill percentage text
    skillPercentage2.textContent = dynamicValue2 + "%";

    // Set the aria-valuenow attribute
    progressBar2.setAttribute("aria-valuenow", dynamicValue2.toString());

    // Update the width of the progress bar
    progressBar2.style.width = dynamicValue2 + "%";

    document.getElementById("SkillName2").innerHTML = document.getElementById(
        "skillsnameField2"
    ).value;


    
    function calculateDynamicValue3() {
        // dynamic value calculation logic here
        var inputVal3 = document.getElementById( "skillsvalueField3" ).value;
        return inputVal3; // Example dynamic value
      }

    // Select the progress bar element
    const progressBar3 = document.querySelector("#progress-bar3");

    // Select the skill percentage element
    const skillPercentage3 = document.querySelector("#SkillValue3");

    // Calculate the dynamic value
    const dynamicValue3 = calculateDynamicValue3();

    // Update the skill percentage text
    skillPercentage3.textContent = dynamicValue3 + "%";

    // Set the aria-valuenow attribute
    progressBar3.setAttribute("aria-valuenow", dynamicValue3.toString());

    // Update the width of the progress bar
    progressBar3.style.width = dynamicValue3 + "%";

    document.getElementById("SkillName3").innerHTML = document.getElementById(
        "skillsnameField3"
    ).value;


    
    function calculateDynamicValue4() {
        // dynamic value calculation logic here
        var inputVal4 = document.getElementById( "skillsvalueField4" ).value;
        return inputVal4; // Example dynamic value
      }

    // Select the progress bar element
    const progressBar4 = document.querySelector("#progress-bar4");

    // Select the skill percentage element
    const skillPercentage4 = document.querySelector("#SkillValue4");

    // Calculate the dynamic value
    const dynamicValue4 = calculateDynamicValue4();

    // Update the skill percentage text
    skillPercentage4.textContent = dynamicValue4 + "%";

    // Set the aria-valuenow attribute
    progressBar4.setAttribute("aria-valuenow", dynamicValue4.toString());

    // Update the width of the progress bar
    progressBar4.style.width = dynamicValue4 + "%";

    document.getElementById("SkillName4").innerHTML = document.getElementById(
        "skillsnameField4"
    ).value;



    
    function calculateDynamicValue5() {
        // dynamic value calculation logic here
        var inputVal5 = document.getElementById( "skillsvalueField5" ).value;
        return inputVal5; // Example dynamic value
      }

    // Select the progress bar element
    const progressBar5 = document.querySelector("#progress-bar5");

    // Select the skill percentage element
    const skillPercentage5 = document.querySelector("#SkillValue5");

    // Calculate the dynamic value
    const dynamicValue5 = calculateDynamicValue5();

    // Update the skill percentage text
    skillPercentage5.textContent = dynamicValue5 + "%";

    // Set the aria-valuenow attribute
    progressBar5.setAttribute("aria-valuenow", dynamicValue5.toString());

    // Update the width of the progress bar
    progressBar5.style.width = dynamicValue5 + "%";

    document.getElementById("SkillName5").innerHTML = document.getElementById(
        "skillsnameField5"
    ).value;



    // ***************************   education    ***************************************
    document.getElementById("edu-DegreeT1").innerHTML = document.getElementById(
        "edu-degree1"
    ).value;
    document.getElementById("edu-YearT1").innerHTML = document.getElementById(
        "edu-year1"
    ).value;
    document.getElementById("edu-InstituteT1").innerHTML = document.getElementById(
        "edu-institute1"
    ).value;

    document.getElementById("edu-DegreeT2").innerHTML = document.getElementById(
        "edu-degree2"
    ).value;
    document.getElementById("edu-YearT2").innerHTML = document.getElementById(
        "edu-year2"
    ).value;
    document.getElementById("edu-InstituteT2").innerHTML = document.getElementById(
        "edu-institute2"
    ).value;

    document.getElementById("edu-DegreeT3").innerHTML = document.getElementById(
        "edu-degree3"
    ).value;
    document.getElementById("edu-YearT3").innerHTML = document.getElementById(
        "edu-year3"
    ).value;
    document.getElementById("edu-InstituteT3").innerHTML = document.getElementById(
        "edu-institute3"
    ).value;

    //trainings
    
    document.getElementById("course-trainT1").innerHTML = document.getElementById(
        "course-train1"
    ).value;
    document.getElementById("duration-trainT1").innerHTML = document.getElementById(
        "duration-train1"
    ).value;
    document.getElementById("organization-trainT1").innerHTML = document.getElementById(
        "organization-train1"
    ).value;
    document.getElementById("description-trainT1").innerHTML = document.getElementById(
        "description-train1"
    ).value;
    
    
    document.getElementById("course-trainT2").innerHTML = document.getElementById(
        "course-train2"
    ).value;
    document.getElementById("duration-trainT2").innerHTML = document.getElementById(
        "duration-train2"
    ).value;
    document.getElementById("organization-trainT2").innerHTML = document.getElementById(
        "organization-train2"
    ).value;
    document.getElementById("description-trainT2").innerHTML = document.getElementById(
        "description-train2"
    ).value;

/*
    //work experience
    let wes=document.getElementsByClassName("weField");

    let str=" ";

    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML =str;

    //academic qualification

    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";

    for(let e of aqs){
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;
    */

    //code for setting image

    let img1 = document.getElementById("imageField").files[0];

    console.log(img1);

    let reader = new FileReader();
    reader.readAsDataURL(img1);

    console.log(reader.result);

    //set image in template
    reader.onloadend = function(){
        document.getElementById('PhotoT').src=reader.result;
        document.getElementById('Photo2T').src=reader.result;  
   }



   //education section

   $('#submitBtn').click(function() {
    var educationDetails = [];
    $('.education-form').each(function() {
      var institution = $(this).find('input[name="institution[]"]').val();
      var degree = $(this).find('input[name="degree[]"]').val();
      var year = $(this).find('input[name="year[]"]').val();
      educationDetails.push({
        institution: institution,
        degree: degree,
        year: year
      });
    });

    var $educationList = $('#educationList');
    $educationList.empty();
    $.each(educationDetails, function(index, education) {
      var listItem = '<li><strong>Institution:</strong> ' + education.institution + '<br>';
      listItem += '<strong>Degree:</strong> ' + education.degree + '<br>';
      listItem += '<strong>Year:</strong> ' + education.year + '</li>';
      $educationList.append(listItem);
    });

    //$('#displaySection').show();
  });

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}
function addInter(){
    document.getElementById("inter").style.display = "block";
    document.getElementById("add-inter").style.display = "none";
    document.getElementById("interT").style.display = "block";
}
function removeInter(){
    document.getElementById("inter").style.display = "none";
    document.getElementById("add-inter").style.display = "block";
    document.getElementById("interT").style.display = "none";
}
function addBTech(){
    document.getElementById("btech").style.display = "block";
    document.getElementById("add-btech").style.display = "none";
    document.getElementById("remove-inter").style.display = "none";
    document.getElementById("btechT").style.display = "block";
}
function removeBTech(){
    document.getElementById("btech").style.display = "none";
    document.getElementById("add-btech").style.display = "block";
    document.getElementById("remove-inter").style.display = "block";
    document.getElementById("btechT").style.display = "none";
}
//training events

function addTrains(){
    document.getElementById("trainings-add").style.display ="block";
    document.getElementById("trainingsT").style.display ="block";
}
function hideTrains(){
    document.getElementById("trainings-add").style.display ="none";
    document.getElementById("trainingsT").style.display ="noness";
}
function addTraining2(){
    document.getElementById("Training2").style.display = "block";
    document.getElementById("add-train-two").style.display = "none";
    document.getElementById("Training2T").style.display = "block";
}

function removeTraining2(){
    document.getElementById("Training2").style.display = "none";
    document.getElementById("add-train-two").style.display = "block";
    document.getElementById("Training2T").style.display = "none";
}
// ***********************       Background Image   *******************************
document.getElementById('bgimageField').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
  
    reader.onload = function(e) {
      var imageUrl = e.target.result;
      document.getElementById('hero').style.backgroundImage = 'url("' + imageUrl + '")';
    };
  
    reader.readAsDataURL(file);
  });
  


function printCV(){
    window.print();
}