// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*----------------------------------------------Line-Breaks-Between-Each-Function-----------------------------------------------*/
/*----------------------------------------------------GENERATE-PASSWORD---------------------------------------------------------*/

//Generate a password and returns it to display on screen
function generatePassword()
{
  //Create password variable to store the password that will be use to return
  let password = ''

  //Display/alert the password criteria
  passwordCriteria()

  //Get user inputs for password length and the data type that they wants to include in the password.
  let passwordLength = getPasswordLength()
  let dataType = getDataType()

  //Create new variables to store data
  let alpha = getData(/^[a-z]+$/)
  let num = getData(/^[0-9]+$/)
  let specialChar = getData(/^[!-/,:-@,[-`,{-~]+$/)
  
  //Create a new variable to store the length of each array 
  //So we don't have to recall the function .length in the for loop everytime it iterates 
  let dataTypeLength = dataType.length
  let alphaLength = alpha.length
  let numLength = num.length
  let specialCharLength = specialChar.length

  //Randomly select a data type from the user input and store it into the password variable
  for(i = 0; i < passwordLength;i++)
  {
    switch (dataType[Math.floor(Math.random() * dataTypeLength)])
    {
      case 'l':
          password += (alpha[Math.floor(Math.random() * alphaLength)].toLowerCase())
        break;
        case 'n':
          password += (num[Math.floor(Math.random() * numLength)])
        break;
        case 's':
          password += (specialChar[Math.floor(Math.random() * specialCharLength)])
        break;
        case 'u':
          password += (alpha[Math.floor(Math.random() * alphaLength)].toUpperCase())
        break;
         
    }
  }

    //Return the password and display it onto the screen
    return password
}

/*----------------------------------------------Line-Breaks-Between-Each-Function-----------------------------------------------*/
/*------------------------------------------------------PASSWORD-CRITERIA-------------------------------------------------------*/

//Prompt for a series of password criteria and user will have to select which criteria to include in the password
const passwordCriteria = () =>
{
  alert(
  `Passwords requirements:

  A minimum of (8) and maximum of (128) characters in length
  Be memorized; if a password is written down it must be secure
  Contain at least one (1) character from four (4) of the following 
  categories:
    -Uppercase letter (A-Z)
    -Lowercase letter (a-z)
    -Digit (0-9)
    -Special character (~\`!@#$%^&*()+=_-{}[]\|:;”’?/<>,.)`
  )
}

/*----------------------------------------------Line-Breaks-Between-Each-Function-----------------------------------------------*/
/*----------------------------------------------------GET-PASSWORD-LENGTH-------------------------------------------------------*/

//Get password length from user (Range must be between 8 - 120)
let getPasswordLength = () =>
{
  let passwordLength = 0
  let inputTimes = 0
  do{
    //
    if(inputTimes === 0) 
    {
      passwordLength = prompt("Please enter your password range? (Minimum of 8 and maximum of 128)")
      inputTimes++
    }
      else
      {
      passwordLength = prompt("Invalid input, range must be between 8 to 128, please try again!")
      }
    
  }while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)

  return passwordLength
}

/*----------------------------------------------Line-Breaks-Between-Each-Function-----------------------------------------------*/
/*--------------------------------------------------------GET-DATA-TYPE---------------------------------------------------------*/

//Get characters type from user (User must choose lowercase, uppercase, numeric, and/or special characters)
let getDataType = () =>
{
  let dataType 

  do{
    
    dataType = prompt(`Please choose (l)owercase, (u)ppercase, (n)umeric, and/or (s)pecial characters you want to include in your password (Follow by a comma ",")`)
    if(dataType != null)
    {
    dataType = dataType.replace(/,/g, "")
    }
  }while( !isNaN(dataType) || !/^[luns]+$/.test(dataType))

  //Remove any duplicated values and return a uniq set of array
  //Filter method : "Return dataType.split("").filter((value, index) => dataType.indexOf(value) === index)"
  //Current method : Using Set
  return [...new Set(dataType)].sort()
}

/*----------------------------------------------Line-Breaks-Between-Each-Function-----------------------------------------------*/
/*-----------------------------------------------------------GET-DATA-----------------------------------------------------------*/

//getData will returns the data in the str range 
//Format: getData(/^[data-range]+$/) 
//Example: getData(/^[A-Z])+$/) will returns all the upper case letters in the alphabet
let getData = (str) =>
{
  let data = []
  for(i=33,a='';i<127;i++)
   {
     if(isData(str,String.fromCharCode(i)))
     {
        data.push((String.fromCharCode(i)))
     }  
    
    }
  return data
}

/*----------------------------------------------Line-Breaks-Between-Each-Function-----------------------------------------------*/
/*----------------------------------------------------------IS-DATA-------------------------------------------------------------*/

//isData returns the type of the specific data that passed through the parameter data
//Using .test(str) will test to see if str is in the data range and return true if found else return false
const isData = (data,str) =>
{
  return data.test(str)
}

/*----------------------------------------------Line-Breaks-Between-Each-Function-----------------------------------------------*/
/*--------------------------------------------------------------END-------------------------------------------------------------*/