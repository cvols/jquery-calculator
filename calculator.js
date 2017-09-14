// document ready
    $(document).ready(function() {
        // create 2 array var (var1 var2) equal to empty + 1 operatorVar + answerVar
        // if statement for adding numbers on click event for each click/number to var1 else or operator is pressed && != equals does not count
        // record what operators was pressed into operatorVar
        // convert var1 from strong to integers
        // then start another if statement for adding numbers into 2nd array var2 and ends when equals is clicked
        // convert var2 from strong to integers
        // function var1 operatorVar var2 = answerVar
        // answerVar print to screen
        // clear function
        // reset all variables, html, back empty()/ reset empty

        // global variables
        var firstNumber = $("#first-number");
        var secondNumber = $("#second-number");
        var operator = $("#operator");
        var first = [];
        var second = [];
        var totalFirstNumber = 0;
        var totalOperator = "";
        var totalSecondNumber = 0;
        var realTotalFirstNumber = 0;
        var realTotalSecondNumber = 0;

        // on number click get its value and store it in var value
        $('.number').on('click', function() {
            var value = $(this).val();

          
            if ($("#result").text() === "") {
                if ($("#operator").text() === "") {
                    totalFirstNumber = first.push(parseInt(value));
                    realTotalFirstNumber = parseInt(first.join(""));

                    $('#first-number').append(value);
                } else {
                    totalSecondNumber = second.push(parseInt(value));

                    realTotalSecondNumber = parseInt(second.join(""));
                    $('#second-number').append(value);
                }
            }

        });

        $('.operator').on('click', function() {
            totalOperator = $(this).val();
            console.log(totalOperator);
            if ($("#first-number").text() !== "") {
                if ($("#operator").text() === "") {
                    $('#operator').append($(this).text());
                }
            }
        });

        $("#button-equal").on("click", function() {
            if (totalOperator === "add") {
                var total = realTotalFirstNumber + realTotalSecondNumber;
                $("#result").html(total);
            } else if (totalOperator === "minus") {
                var total = realTotalFirstNumber - realTotalSecondNumber;
                $("#result").html(total);
            } else if (totalOperator === "multiply") {
                var total = realTotalFirstNumber * realTotalSecondNumber;
                $("#result").html(total);
            } else if (totalOperator === "divide") {
                var total = realTotalFirstNumber / realTotalSecondNumber;
                $("#result").html(total);
            } else if (totalOperator === "power") {
                var total = Math.pow(realTotalFirstNumber, realTotalSecondNumber);
                $("#result").html(total);
            }
        });

        $(".clear").on("click", function() {
            firstNumber = $("#first-number");
            secondNumber = $("#second-number");
            operator = $("#operator");
            first = [];
            second = [];
            totalFirstNumber = 0;
            totalOperator = "";
            totalSecondNumber = 0;
            realTotalFirstNumber = 0;
            realTotalSecondNumber = 0;
            $("#first-number").empty();
            $("#operator").empty();
            $("#second-number").empty();
            $("#result").empty();
        });
    });
