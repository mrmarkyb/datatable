(function ($) {
	$.fn.datatable = function (options) {

        var opts = $.extend({}, $.fn.datatable.defaults, options);

	    return this.each(function () {
            var input = $(this);

            input.find("tr").live('mouseover mouseout', function (event) {
                if (event.type == 'mouseover') {
                    $(this).children("td").addClass("ui-state-hover");
                } else {
                    $(this).children("td").removeClass("ui-state-hover");
                }
            });

            input.addClass("ui-widget ui-widget-content ui-corner-all");
            var title = input.find(opts.titleLookup);
            title.addClass("ui-widget-header ui-corner-top");
            var title_span = title.parent().next().children().size();
            if(title_span>1) {
                title.attr("colspan", title_span);
            }
            input.find("td").addClass("ui-widget-content");
            var last_row = input.find("tr").last();
            last_row.children().first().addClass("ui-corner-bl");
            last_row.children().last().addClass("ui-corner-br");
	    });
	};

    $.fn.datatable.defaults = {
        titleLookup : ".title"
    };
})(jQuery);