var userInput;
var userName;
userInput = 'Alcione';
userInput = 34;
// userName = userInput; => This will cause an error cuz the type unknown is not assigned to type string
// unknown is more restrict than any.
//  in this case one option would be checking the typeof userInput
if (userInput === 'string') {
    userName = userInput;
}
// the {never} type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error has occurred!', 500);
