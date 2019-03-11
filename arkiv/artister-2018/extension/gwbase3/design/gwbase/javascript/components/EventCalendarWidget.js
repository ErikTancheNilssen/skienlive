;(function (ApliaSiteObject, Repo) {
    $.extend(Repo, {
        EventCalendarWidget: {
            init: function (options) {
                var selector = options.selector,
                    overrideSettings = options.overrideSettings;

                $(selector).each(function () {

                    var nodeId = $(this).data('calendarnodeid');
                    var cachedData = {}; // Cache the results from AJAX calls, no need to fetch again.
                    var $e = $(this),
                        baseUrl = $e.data('calendarurl');

                    var year = $e.data('year'),
                        month = $e.data('month'),
                        initialDay = $e.data('day');

                    if (!year) {
                        year = new Date().getFullYear();
                    }
                    if (!month) {
                        month = new Date().getMonth() + 1; // Since php date is 12 , js is 11 , and we add one in inital.
                    }
                    if (!initialDay) {
                        initialDay = 1; // Hardcoded. We show monthly basis anyway.
                    }

                    var settings = {
                        datasource: function (month, year, callback) {
                            var uri = '/calexport/events/(calendarNode)/' + nodeId + '/(year)/' + year + '/(month)/' + (month + 1);
                            if (cachedData[uri]) {
                                callback(cachedData[uri]);
                            } else {
                                $.getJSON(uri, function (data) {
                                    cachedData[uri] = data;
                                    callback(data);
                                });
                            }
                        },
                        inital: {
                            year: year,
                            month: parseInt(month)-1,
                            day: initialDay
                        },
                        constructor: function () {
                            var that = this;
                            this.el.on("apliacalendar:showMonth:before", function () {
                                if (!that.initialShowMonth) {

                                    // Select the last day of month if the next month does not have day 31 .. if february only has max 28, use 28.
                                    var daysInNextMonth = new Date(that.year, that.month+1, 0).getDate();
                                    initialDay = daysInNextMonth < initialDay ? daysInNextMonth : initialDay;

                                    that.redirectTo(baseUrl + "/(year)/" + that.year + "/(month)/" + (that.month+1) + '/(day)/' + initialDay);
                                }
                            });
                            this.el.on("apliacalendar:showMonth:after", function () {
                                if (that.initialShowMonth) {
                                    that.el.find('td[data-day="'+(initialDay-1)+'"]').addClass('clicked');
                                }
                            });

                        }
                    };

                    if (overrideSettings) {
                        settings = $.extend(settings, overrideSettings);
                    }


                    $e.tableCalendar(settings);


                });

            }
        }
    });
})(window.ApliaSiteObject = window.ApliaSiteObject || {}, window.ApliaSiteObject.Components = window.ApliaSiteObject.Components || {});