describe('forecastController', function() {
    var $componentController;
    var weatherStub = {"dt":1504465200,"temp":{"day":299.6,"min":292.47,"max":299.96,"night":292.47,"eve":296.93,"morn":299.96},"pressure":981.03,"humidity":68,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":2.32,"deg":155,"clouds":24,"rain":2.49};
    beforeEach(module('weatherApp'));
    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
    }));
    it('should take a weather object and display in Fahrenheit', function() {
        var bindings = {weatherDay: weatherStub};
        var ctrl = $componentController('weatherCitySearch', null, bindings);
        expect(isNaN(ctrl.weatherDay.temp.day)).toBe(false);
        expect(ctrl.toFahrenheit()).toEqual(80);
    });
    it('should take a weather object and display a date', function() {
        var bindings = {weatherDay: weatherStub};
        var ctrl = $componentController('weatherCitySearch', null, bindings);
        expect(isNaN(ctrl.weatherDay.dt)).toBe(false);
        var ctrlDate = ctrl.toDate();
        expect(ctrlDate.getFullYear()).toEqual(2017);
        expect(ctrlDate.getMonth()).toEqual(8);
        expect(ctrlDate.getDate()).toEqual(3);
    });


    /*it('should call the `onDelete` binding, when deleting the hero', function() {
        var onDeleteSpy = jasmine.createSpy('onDelete');
        var bindings = {hero: {}, onDelete: onDeleteSpy};
        var ctrl = $componentController('heroDetail', null, bindings);

        ctrl.delete();
        expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});
    });

    it('should call the `onUpdate` binding, when updating a property', function() {
        var onUpdateSpy = jasmine.createSpy('onUpdate');
        var bindings = {hero: {}, onUpdate: onUpdateSpy};
        var ctrl = $componentController('heroDetail', null, bindings);

        ctrl.update('foo', 'bar');
        expect(onUpdateSpy).toHaveBeenCalledWith({
            hero: ctrl.hero,
            prop: 'foo',
            value: 'bar'
        });
    });*/
});