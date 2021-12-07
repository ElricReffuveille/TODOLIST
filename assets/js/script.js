jQuery(document).ready(function($) {

    function setTrashes(tasker) {
        //Evenement à la suppresion d'une tâche
        $(tasker+' .fa-trash').on('click', function(event) {
            $(event.target).parent().parent().parent().remove();
        });
    }

    function setDone(tasker) {
        //Evenement à la validation d'une tâche
        $(tasker+' .fa-check').on('click', function(event) {
            let task = $(event.target).parent().parent().parent();
    
            task.attr("style", "font-style:italic");
            task.find("#task-desc").attr("style", "text-decoration: line-through;")
        });
    }

    setTrashes('#task1');
    setDone('#task1');

    //Evenement à la soumission du formulaire
    $('form').on('submit', function(event) {
        event.preventDefault();
        
        if ($('#desc').val() != "" && $('#date').val() != "") {
            //Valeurs du formulaire
            let description = $('#desc').val();
            let echeance = $('#date').val();

            //Compteur de tache
            let cpt = 0;
            cpt = $('.task-item').length + 1;

            //Nouvelle tâche
            let task = "";
            task += '<li id="task'+cpt+'" class="task-item">';
            task += '<div class="row">';
            task += '<div class="col">';
            task += '<p class="task-number">'+cpt+'</p>';
            task += '<p class="task-content">';
            task += '<span id="task-desc">'+description+'</span>';
            task += '<time id="task-date" datetime="'+echeance+'">'+$.datepicker.formatDate('dd M yy', new Date(echeance))+'</time>';
            task += '</p>';
            task += '</div>';
            task += '<div class="col">';
            task += '<div class="task-btn fas fa-check btn-icon"></div>';
            task += '<div class="task-btn fas fa-pen btn-icon"></div>';
            task += '<div class="task-btn fas fa-trash btn-icon"></div>';
            task += '</div>';
            task += '</div>';
            task += '</li>';
            
            //Ajout nouvelle tâche
            $('.tasks').append(task);

            setTrashes('#task'+cpt);
            setDone('#task'+cpt);

            //Valeurs du formulaire
            $('#desc').val("");
            $('#date').val("");
        }
    });

    //Evenement à la modification d'une tâche
    $('.fa-pen').on('click', function(event) {

    });

});