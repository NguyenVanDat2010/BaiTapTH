let TemperatureC= function (celsius ) {
    this.celsius=celsius;

    this.getFehrenheit=function () {
        return this.celsius*1.8+32;
    };
    this.getKelvin=function () {
        return this.celsius+273.15;
    };

    this.setCelsius=function (celsius) {
        this.celsius=celsius;
    }
};

let changeTemperature = new TemperatureC(25);
alert("Độ F là: "+changeTemperature.getFehrenheit()+", Độ K là: "+changeTemperature.getKelvin());

changeTemperature.setCelsius(37);
alert("Độ F là: "+changeTemperature.getFehrenheit()+", Độ K là: "+changeTemperature.getKelvin());
