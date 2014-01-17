$(document).ready(function() {
    var $quiz = $('#quiz');
    var $results = $('#results');
    var num_correct = 0;

    $quiz.find('li strong').click(function(){
        var $q = $(this).parents('.question');
        var $b = $q.find('strong');
        var got_it_right = $(this).parent('li').hasClass('correct');
        var answer_text = $(this).next('.answer');
        var right_answer = $q.find('.correct');

        $q.addClass('answered');

        if (got_it_right) {
            $(this).prepend('<b>RIGHT!</b> ');
            num_correct++;
            console.log(num_correct);
            switch(num_correct) {
                case 1:
                    $results.html('You answered <strong>' + num_correct + '</strong> question correctly &mdash; not good enough to drive in China.');
                    break;
                case 9:
                    $results.html('You answered <strong>' + num_correct + '</strong> questions correctly. Congratulations! You\'ve passed the test!');
                    break;
                case 10:
                    $results.html('You answered <strong>' + num_correct + '</strong> questions correctly. Amazing! You\'ve aced the test!');
                    break;
                default:
                    $results.html('You answered <strong>' + num_correct + '</strong> questions correctly &mdash; not good enough to drive in China.');
                    break;
            }
        } else {
            $(this).prepend('<b>WRONG!</b> ');
        }
 
        console.log($results.text());

        $b.each(function(v,k) {
            $(this).unbind('click');
        });

        sendHeightToParent();
    });

    setupResponsiveChild();
});