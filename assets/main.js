//creating empty array to store guessed countries
var existingArr = [];
var misMatch = document.querySelector(".misMatch");

function search(ele) {
  if(event.key === "Enter") {
    var countries = ['Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Réunion', 'Romania', 'Russia', 'Rwanda', 'Saint Barthélemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'UAE','UK', 'USA', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];
    
    //The array will store and check if the country has already been guessed
    if(existingArr.includes(ele.value.trim())){
      misMatch.innerHTML = "You've already guessed the country";
      misMatch.style.display = "block";
      ele.value="";

    }
    else{

      //it will check whether the country name is valid or not
      if (countries.includes(ele.value.trim())){
        existingArr.push(ele.value.trim());
        var prog = Number(document.querySelector("#progress").textContent);
        document.querySelector("#progress").innerHTML = prog + 1;
        misMatch.style.display = "none";
        ele.value ="";
        colorChange();
      }

      //if the country name doesn't exist or in case of spelling mistake
      else{
        misMatch.innerHTML = "Country Doesn't Exist, Please Check Your Spellings!";
        misMatch.style.display = "block";
        ele.value="";
      }
    }
  }

}

function colorChange(){
  var natns = existingArr[existingArr.length-1];
  var displayCountry = document.querySelector("[class=" +  CSS.escape(natns) + "]");



  var color = new Array();
  color[0] = "#CC99FF";color[1] = "#FF99CC";color[2] = "#FF9999";color[3] = "#FFCC99";color[4] = "#FFFF99";color[5] = "#CCFF99";color[6] = "#99FF99";color[7] = "#99FFCC";color[8] = "#66FFFF";color[9] = "#66CCFF";color[10] = "#D9DC17";color[11] = "purple";color[12] = "brown";color[13] = "orange"; color[14] = "#198BF0";color[15] = "#AF2D06";color[16] = "#06AF9F";color[17]="#A53C95";color[18]="#CB5A79";color[19]="#74A007";color[20]="#0EC3C3";

  var lastColorIndex = localStorage.getItem('lastColorIndex') || -1;
  var randomColor = -1;
  while(lastColorIndex == randomColor || randomColor === -1) {        
  randomColor = Math.floor(Math.random() * color.length);
      console.log('LastIndex: ' + lastColorIndex + ',RandomColor: ' + randomColor);
  };
  localStorage.setItem('lastColorIndex',randomColor);

  displayCountry.style.stroke = "#828181";
  displayCountry.style.fill = color[randomColor];
}
