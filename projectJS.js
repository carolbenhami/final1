document.getElementById("myButton").addEventListener('click',myWindow)
function myWindow(){
    visitorName = document.getElementById("myInput").value;
    myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
    myText += ("Hello " + visitorName + ", this page was created on-the-fly!");
    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
    flyWindow.document.write(myText);
}