import React from 'react';
import { Sparklines, SparklinesLine,SparklinesSpots} from 'react-sparklines';

function boxMullerRandom () {
    let phase = false,
        x1, x2, w;

    return (function() {

        if (phase = !phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}


export class Spark extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        setInterval(() =>
            this.setState({
                data: this.state.data.concat([boxMullerRandom()])
            }), 500);
    }

    render() {
        return (
            <Sparklines data={this.state.data} limit={20}>
                <SparklinesLine color="#1c8cdc" />
                <SparklinesSpots />
            </Sparklines>
        );
    }
}