"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
function searchEvents(options) {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === 'number') {
            return (event.id === options.query);
        }
        if (typeof options.query === 'string') {
            return (event.keywords.includes(options.query));
        }
    });
}
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents.push(event);
}
let options = { query: 2, eventType: 'art' };
let searchResults = searchEvents(options);
console.log(searchResults);
if (searchResults.length > 0) {
    enroll(searchResults[0]);
}
console.log(enrolledEvents);
