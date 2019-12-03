

class chartModel {
    constructor(data) {
        this.data = data;
    }

    createChart(id, resturant) {
        var ctx = document.getElementById(id).getContext('2d');
        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Bra', 'Ok', 'Sådär', 'Dåligt'],
                datasets: [{
                    label: 'rating',
                    backgroundColor: ["#388E3C", "#AFB42B", "#FF7043", "#C62828"],
                    borderColor: ["#388E3C", "#AFB42B", "#FF7043", "#C62828"],
                    data: this.getRating(resturant),
                }]
            },
            options: {}
        });
    }

    getRating(resturant) {
        let data = this._getRating(resturant);
        let x = [
            _.find(data, ['rating', 1]) || 0,
            _.find(data, ['rating', 2]) || 0,
            _.find(data, ['rating', 3]) || 0,
            _.find(data, ['rating', 4]) || 0,
        ];

        for (let i = 0; i < x.length; i++) {
            if (x[i] !== 0) {
                x[i] = x[i].counter;
            }
        }
        console.log(x);
        return x;
    }

    _getRating(resturant) {
        let ret = [];
        this.data.forEach(element => {
            if (element.resturant == resturant) {
                if (this._findExisting(ret, element.rating)) {
                    let index = this._getIndex(ret, element.rating, 'rating');
                    ret[index].counter += 1;
                } else {
                    ret.push({
                        rating: element.rating,
                        counter: 1
                    });
                }
            }
        });
        return ret;
    }

    _findExisting(arr, lookup) {
        let bool = false;
        arr.forEach(element => {
            if (element.rating == lookup) {
                bool = true;
                return true;
            }
        });
        return bool;
    }

    _getIndex(arr, lookup, key) {
        let counter = 0;
        let index = -1
        arr.forEach((element) => {
            if (element[key] == lookup) {
                index = counter;
                return counter;
            }
            counter++;
        });
        return index;
    }
}

let model = new chartModel(window.data);

var chart2 = model.createChart('myChart2', 'Greek Grill');
var chart2 = model.createChart('myChart', 'O\'learys');
