// Array to store guessed countries
let guessedCountries = [];

// DOM elements
const misMatch = document.querySelector(".misMatch");
const allCountriesElement = document.getElementById("allCountries");
const progressElement = document.querySelector("#progress");

const countries = [
  'Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa', 
  'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 
  'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 
  'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 
  'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 
  'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 
  'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 
  'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 
  'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 
  'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Curacao', 'Cyprus', 
  'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 
  'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 
  'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 
  'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 
  'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 
  'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 
  'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 
  'Iceland', 'India', 'Indonesia','Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 
  'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 
  'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 
  'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 
  'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 
  'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 
  'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 
  'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 
  'Northern Mariana Islands','North korea', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 
  'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 
  'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Réunion', 'Romania', 'Russia', 
  'Rwanda', 'Saint Barthélemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 
  'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 
  'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 
  'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 
  'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 
  'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 
  'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad', 
  'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 
  'Ukraine', 'UAE', 'UK', 'USA', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 
  'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'
];

// Display total number of countries
allCountriesElement.innerHTML = countries.length;

// Search and handle user input
function search(ele) {
  const lowerCaseCountries = countries.map(country => country.toLowerCase());
  
  if (event.key === "Enter") {
    const input = ele.value.trim().toLowerCase();
    const countryIndex = lowerCaseCountries.indexOf(input);

    // If the country is already guessed
    if (guessedCountries.includes(countries[countryIndex])) {
      displayMessage("You've already guessed the country", true);
      ele.value = "";
      return;
    }

    // If the country is valid
    if (countryIndex !== -1) {
      guessedCountries.push(countries[countryIndex]);
      updateProgress();
      displayMessage("", false);
      ele.value = "";
      changeCountryColor(countries[countryIndex]);
    } else {
      // If the country is invalid
      displayMessage("Country Doesn't Exist, Please Check Your Spellings!", true);
      ele.value = "";
    }
  }
}

// Update the progress
function updateProgress() {
  const currentProgress = Number(progressElement.textContent);
  progressElement.textContent = currentProgress + 1;
}

// Display error or success messages
function displayMessage(message, isVisible) {
  misMatch.textContent = message;
  misMatch.style.display = isVisible ? "block" : "none";
}

// Change the color of the guessed country
function changeCountryColor(country) {
  const displayCountryElement = document.querySelector(`[class="${CSS.escape(country)}"]`);

  const colors = [
    "#CC99FF", "#FF99CC", "#FF9999", "#FFCC99", "#FFFF99", "#CCFF99", 
    "#99FF99", "#99FFCC", "#66FFFF", "#66CCFF", "#D9DC17", "purple", 
    "brown", "orange", "#198BF0", "#AF2D06", "#06AF9F", "#A53C95", 
    "#CB5A79", "#74A007", "#0EC3C3"
  ];

  let lastColorIndex = localStorage.getItem('lastColorIndex') || -1;
  let randomColorIndex;

  //New color pick
  do {
    randomColorIndex = Math.floor(Math.random() * colors.length);
  } while (randomColorIndex == lastColorIndex);

  localStorage.setItem('lastColorIndex', randomColorIndex);

  // Apply the color
  displayCountryElement.style.stroke = "#828181";
  displayCountryElement.style.fill = colors[randomColorIndex];
}
