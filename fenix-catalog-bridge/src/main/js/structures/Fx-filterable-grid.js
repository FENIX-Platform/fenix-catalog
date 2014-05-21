/*global define*/

define([
    'jquery',
    'widgets/Fx-widgets-commons',
    "isotope"
], function ($, W_Commons, Isotope) {

    var o = { },
        defaultOptions = {
            data_filter_value: "data-filter-value",
            css_filter_active: "catalog-filter-active"
        };

    var isotope, w_Commons;

    function Fx_Filterable_grid() {
        w_Commons = new W_Commons();
    }

    Fx_Filterable_grid.prototype.initBtns = function () {

        // filter items on button click
        $(o.filters).on('click', 'button', function (event) {
            this.filterIsotope({ filter: $(this).attr(o.data_filter_value) });
            $(o.filters).find(" button").removeClass(o.css_filter_active);
            $(this).addClass(o.css_filter_active);
        });

        $(o.filters).find("button[" + o.data_filter_value + "='*']").addClass(o.css_filter_active);

    };

    Fx_Filterable_grid.prototype.filter = function (filterValue) {

        $("button").removeClass(o.css_filter_active);
        $("button[" + o.data_filter_value + "='" + filterValue + "']").addClass(o.css_filter_active);
        this.filterIsotope({ filter: filterValue });
    };

    Fx_Filterable_grid.prototype.filterIsotope = function (filters) {
        isotope.arrange(filters);
    };

    Fx_Filterable_grid.prototype.clear = function () {
        isotope.remove(isotope.getItemElements());
        this.filter("*");
    };

    Fx_Filterable_grid.prototype.addItems = function (items) {

        o.container.appendChild(items);
        isotope.appended(items);
        isotope.layout();
    };

    Fx_Filterable_grid.prototype.validateOptions = function () {

        //Validate HTML Container
        if (!w_Commons.isElement(o.container)) {
            throw new Error("Filterable Grid: INVALID_CONTAINER.")
        }
    };

    Fx_Filterable_grid.prototype.render = function (options) {

        $.extend(o, options);

        this.validateOptions();

        isotope = new Isotope(o.container, o.isotope);

        if (o.filters) {
            this.initBtns();
        }
    };

    Fx_Filterable_grid.prototype.init = function (baseOptions) {

        //Merge options
        $.extend(o, defaultOptions);
        $.extend(o, baseOptions);

    };

    Fx_Filterable_grid.prototype.clear = function () {

        var elements = isotope.getItemElements();

        for (var i = 0; i < elements.length; i++) {
            isotope.remove(elements[i])
        }

    };

    //Public API
    return Fx_Filterable_grid
});