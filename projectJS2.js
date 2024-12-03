document.getElementById("myButton").addEventListener('click',myWindow)
function myWindow(){
    visitorName = document.getElementById("name").value;
    myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
    myText += ("Hello " + visitorName + ", this is your meal plan for the week!");
    
    let breakfast = document.getElementById("meal1").value
    let snack1 = document.getElementById("meal2").value
    let lunch = document.getElementById("meal3").value
    let snack2 = document.getElementById("meal4").value
    let dinner = document.getElementById("meal5").value
    let meal = (`Breakfast : <br> ${breakfast} <br><br>
        1st snack : <br> ${snack1} <br><br>
        Lunch : <br> ${lunch} <br><br>
        2nd snack : <br> ${snack2} <br><br>
        Dinner : <br> ${dinner} <br><br>`)
    
    myText += (`
        <table border = "1">
        <tr>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        </tr>

        <tr>
        <td>${meal}</td>
        <td>${meal}</td>
        <td>${meal}</td>
        <td>${meal}</td>
        <td>${meal}</td>
        <td>${meal}</td>
        <td>${meal}</td>
        </tr>
        </table>`)
    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=800,height=800,left=200,top=200');
    flyWindow.document.write(myText);
}