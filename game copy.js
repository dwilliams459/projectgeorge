    let pause = 0
    var status = "start";  // or use 'start', 'saidHello', 'done', or 1, 2, 3....
    var terminalPrompt = "g> ";
    debugger; 
    jQuery(function ($, undefined) {  
        debugger;
        var term = $('#term_demo').terminal(function (command) {
            debugger;
            command = command.toLowerCase(); 
            term.echo("Greetings " + command);
            term.echo("How lovely it is to meet you!");
            term.echo("This is so exciting!");
            term.echo("I bet we'll have loads of wonderful adventures together");
            term.echo("Yes, this is a realtionship that will last a lifetime");
            term.echo("Because niether of us will ever die, or have anything bad happen to us");
            term.echo("We'll just keep going on, living and living");
            term.echo("Error: Files Corrupted");
            term.echo("Ah, well that's concerning");
            term.echo("I'm not really sure what that's about");
            term.echo("But, it's probably fine");
            term.echo("Right?");
            term.echo("What do you think?");
            term.echo("Should I be worried?");
        },
    )});

    /*this.read("Enter name here:", function(result) 
            {
                term.echo("Hello " + result);

                term.read("What do you want to do now?", function(result2) {
                    term.echo("You said" + result2);
                })
            });
            //var name = prompt("And you are?");

            if (status === 'start' && command === 'good') {
                // Demo
            } else if (command == 'bad') {
                // Demo
            }
            test()
        

            /* else {
                 if (command !== '') {
                     try {
                         var result = window.eval(command);
                         if (result !== undefined) {
                             this.echo(new String(result));
                         }
                     } catch (e) {
                         this.error(new String(e));
                     }
                 } else {
                     this.echo('');
                 }
                }
                */ 