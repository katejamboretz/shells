import React from "react";
import shells from "../../shells.json";
import Header from "../Header";
import Score from "../Score";
import Card from "../Card";
import image1 from "../../images/aaron-burden-1rVQGaA_toU-unsplash.jpg";
import image2 from "../../images/aaron-burden-LMlVa3QDEXs-unsplash.jpg"
import image3 from "../../images/andrew-buchanan-i4eEYLfZq-o-unsplash.jpg"
import image4 from "../../images/axel-visoso-st1hkaZnZow-unsplash.jpg"
import image5 from "../../images/francisco-camino-gonzalez-Fag6CbgA4Bc-unsplash.jpg"
import image6 from "../../images/james-wainscoat-KLzcX9Pimy0-unsplash.jpg"
import image7 from "../../images/nicole-elliott-Fs0_2Vnac_4-unsplash.jpg"
import image8 from "../../images/peter-nicola-1V0ucpOq6D0-unsplash.jpg"
import image9 from "../../images/pooya-5MYIKULVAOc-unsplash.jpg"
import image10 from "../../images/pratik-patel-ABwLp9DVOhg-unsplash.jpg"
import image11 from "../../images/stefan-kunze-xkua4kLZWO0-unsplash.jpg"
import image12 from "../../images/nadieska-meza-siles-F8HbDs4srPE-unsplash.jpg"

// function Container() {
//     return(<div>Where's my app at?</div>);
// }
const photos = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]
// const point = []
// shells.forEach(function (element, i) {
//     element.imageTest = photos[i]
// })
// shells.forEach(function (element) {
//     let rando = Math.floor(Math.random() * 12);
//     tracker.push(rando)
//     console.log("random number " + rando)
//     element.imageTest = photos[rando];
//     element.valuetest = Math.floor(Math.random() * 1);
// });

// Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function resetPage() {
    console.log("page reset");
    shuffle(photos);
    shells.forEach(function (element, i) {
        element.imageTest = photos[i];
        element.valuetest = Math.floor(Math.random() * 2);
    });
}

resetPage();

class Container extends React.Component {

    state = {
        shells,
        score: 0,
        highscore: 0
    };

    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    resetPage = () => {
        console.log("page reset");
        shuffle(photos);
        shells.forEach(function (element, i) {
            element.imageTest = photos[i];
            element.valuetest = Math.floor(Math.random() * 2);
        });
    }

    componentDidMount = () => {
        this.resetPage();
    }

    onClick = event => {
        console.log("I've been clicked")
        const value = event.target.getAttribute("valuetest")
        console.log("Value: " + value)
        if (value === "0") {
            if (this.state.score > this.state.highscore) {
                this.setState(state => ({ highscore: this.state.score }))
            }
            this.setState(state => ({ score: 0 }));
        }
        else {
            this.setState(state => ({ score: this.state.score + 1 }))
        }
        this.resetPage();
    }


    render() {
        return (
            <div>
                <Header />
                <Score score={this.state.score} highscore={this.state.highscore} />
                <div className="row row-cols-*">
                    {this.state.shells.map(shell => (
                        <Card
                            id={shell.id}
                            key={shell.id}
                            name={shell.name}
                            imageTest={shell.imageTest}
                            valuetest={shell.valuetest}
                            onClick={this.onClick.bind(this)}
                        />))}
                </div>
            </div>
        )
    }
}

export default Container;