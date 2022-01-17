"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    console.log(`Timezones by location application is running on port --- ${port}.`);
});
;
const getLocationsWithTimezones = (request, response, next) => {
    let locations = [
        {
            location: 'Germany',
            timezoneName: 'Central European Time',
            timezoneAbbr: 'CET',
            utcOffset: 1
        },
        {
            location: 'China',
            timezoneName: 'China Standard Time',
            timezoneAbbr: 'CST',
            utcOffset: 8
        },
        {
            location: 'Argentina',
            timezoneName: 'Argentina Time',
            timezoneAbbr: 'ART',
            utcOffset: -3
        },
        {
            location: 'Japan',
            timezoneName: 'Japan Standard Time',
            timezoneAbbr: 'JST',
            utcOffset: 9
        }
    ];
    response.status(200).json(locations);
};
app.get('/timezones', getLocationsWithTimezones);
