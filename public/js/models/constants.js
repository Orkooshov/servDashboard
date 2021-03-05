const SERVER_ADDRESS = 'http://localhost/servDashboard/api/serviceStatuses/';
const SERVICE_OK = 'Success';
const SERVICE_FAIL = 'Fail';

// using example:
// insertIntoTag('hello', 'div')
// returns '<div>hello</div>
const insertIntoTag = function(text, tag) {
    return `<${tag}>${text.toString()}</${tag}>`;
}