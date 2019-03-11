;(function (ApliaSiteObject, Repo) {
    $.extend(Repo, {
        ReplaceEmailLinks: {
            init: function (options) {
                $( 'a.email-link' ).each(function( index, element ) {
                    var name;
                    if ($(this).find('.spamfilter-text').length) {
                        name = $(this).find('.spamfilter-text').text();
                    }
                    $(this).find('span').remove();
                    var reciever = $(this).text();
                    $(this).attr('href', "mailto:" + reciever);
                    if (!name) {
                        name = reciever;
                    }

                    $(this).text(name);
                });
                $( 'span.spamfilter' ).hide();
            }
        }
    });
})(window.ApliaSiteObject = window.ApliaSiteObject || {}, window.ApliaSiteObject.Components = window.ApliaSiteObject.Components || {});