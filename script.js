var play = document.getElementById('play');
var main = document.getElementById('main');
var quiz = document.getElementById('quiz');
var questions = Array.from(document.getElementsByClassName('questions'));
var arrow = Array.from(document.getElementsByClassName('fa-arrow-circle-right'));
var correct = Array.from(document.getElementsByClassName('true'));
var notcorrect = Array.from(document.getElementsByClassName('false'));
var queuem = 0;
var count = false;
var counter = [];
var sum;
var final;

function sumingup() {
    var add = (a, b) =>
        a + b
    sum = counter.reduce(add);
    final = Math.floor((sum / 7) * 100);
};
play.addEventListener('mouseover', function () {
    quiz.style.color = 'black';
    quiz.style.opacity = '0.7';
    quiz.style.transition = "color 0.6s"
});
play.addEventListener('mouseleave', function () {
    quiz.style.color = 'white';
});
play.addEventListener('click', function () {
    first.style.visibility = 'visible';
    first.style.opacity = '1';
    main.style.visibility = 'hidden';
    first.style.transition = 'opacity 2.7s';
    document.body.style.background = 'black';
    document.body.style.transition = 'background 1s';
    document.body.style.opacity = '0.75';
});
correct.forEach(function (item) {
    item.addEventListener('click', function () {
        if (count == false) {
            item.style.background = 'blue';
            item.style.color = 'white';
            count = true;
            counter.push(1);
        }
    })
});
notcorrect.forEach(function (item) {
    item.addEventListener('click', function () {
        if (count == false) {
            item.style.color = 'white';
            item.style.background = 'red';
            for (var t = 0; t < correct.length; t++) {
                correct[queuem].style.background = 'blue';
                correct[queuem].style.color = 'white';
                console.log(correct[t]);
            }
            count = true;
        }

    })

});
arrow.forEach(function (item) {
    item.addEventListener('click', function () {
        count = false;
        queuem++;
        for (var i = 0; i < arrow.length; i++) {
            questions[queuem].style.visibility = 'hidden';
            questions[queuem].style.visibility = 'visible';
            questions[queuem].style.opacity = '1';
            questions[queuem].style.transition = 'opacity 1s';
        }
        if (queuem == 7) {
            sumingup();
            var create = document.createElement('p');
            var createtext = document.createTextNode('YOUR SUCCESS IS: %' + final);
            create.appendChild(createtext);
            document.getElementById('success').appendChild(create);
        }
    })
})