/*global alert: false, console: false*/

var TIMER = TIMER || (function (el) {
    'use strict';
    var hoursF  = 0,
        dayF    = 0,
        monthF  = 0,
        yearF   = 0,
        mColl   = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        current = new Date(),
        calData = function (data, el) {
            hoursF  = parseInt(data.hours, 10);
            dayF    = parseInt(data.days, 10);
            monthF  = parseInt(data.months, 10);
            yearF   = parseInt(data.years, 10);
            
            var tmpMnth = current.getMonth() + 1,
                month   = 0,
                days    = 0;
            
            if (yearF === current.getFullYear() && monthF !== current.getMonth() + 1) {
                while (true) {
                    tmpMnth += 1;
                    if (tmpMnth !== monthF) {
                        month += 1;
                    } else {
                        days = (mColl[monthF - 2] - current.getDate()) + dayF;
                        if (days > mColl[monthF - 1]) {
                            month += 1;
                            days = days - mColl[monthF - 2];
                        }
                        break;
                    }
                }
            }
            
            el.elMonth.textContent  = Number(parseInt(month, 10));
            el.elDays.textContent   = days;
            el.elHours.textContent  = hoursF;
        },
        remains = function (data) {
            calData(data.finishing, data.elements);
        };
    return {
        remains: remains
    };
}(window));