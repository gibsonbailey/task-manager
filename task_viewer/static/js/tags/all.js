riot.tag2('personal-lists', '<div class="container body-container"> <div each="{p in opts.people}" class="container personal-container"> <div class="personal-title">{p.username}</div> <div class="task-list" id="{p.id}"> <div each="{t in p.tasks}" class="task" id="{p.id},{t.id}"> <div class="task-header"> <div class="task-title">{t.title}</div> <div class="task-description-toggle"></div> </div> <div class="task-description">{t.description}</div> </div> </div> </div> </div>', 'personal-lists .currently-being-dragged,[data-is="personal-lists"] .currently-being-dragged{ transform: translate(0px, 15px) rotate(10deg); } personal-lists .body-container,[data-is="personal-lists"] .body-container{ display: flex; justify-content: center; align-items: flex-start; width: auto; height: auto; } personal-lists .personal-container,[data-is="personal-lists"] .personal-container{ display: inline-block; width: 300px; margin: 20px; border-style: solid; border-radius: 8px; border-width: 3px; border-color: #eee; background: #eee; box-shadow: 3px 3px 5px grey; height: auto; } personal-lists .personal-title,[data-is="personal-lists"] .personal-title{ display: block; text-align: center; margin: 5px; font-weight: bold; font-color: #10213d; } personal-lists .task-list,[data-is="personal-lists"] .task-list{ width: 100%; min-height: 100px; } personal-lists .task,[data-is="personal-lists"] .task{ display: block; margin: 5px 5px 15px 5px; padding: 3px 3px 3px 3px; background: #fff; border-style: solid; border-radius: 4px; border-color: #fff; box-shadow: 4px 4px 5px grey; transition: all .1s ease; -webkit-transition: all .1s ease; } personal-lists .task:hover,[data-is="personal-lists"] .task:hover{ transform: scale(1.05); box-shadow: 6px 6px 5px grey; transition: all .1s ease; -webkit-transition: all .1s ease; } personal-lists .task-placeholder,[data-is="personal-lists"] .task-placeholder{ display: block; min-height: 65px; margin: 5px 5px 5px 5px; padding: 3px 3px 3px 3px; background: #eee; border-style: solid; border-radius: 4px; border-color: #eee; } personal-lists .task-header,[data-is="personal-lists"] .task-header{ display: flex; justify-content: space-between; align-items: center; padding: 5px; } personal-lists .task-description-toggle,[data-is="personal-lists"] .task-description-toggle{ width: 20px; height: 20px; background: #ddd; border-radius: 3px; border-color: transparent; border-width: 4px; } personal-lists .task-title,[data-is="personal-lists"] .task-title{ } personal-lists .task-description,[data-is="personal-lists"] .task-description{ display: none; border-top: solid #eee 2px; padding: 5px; font-weight: light; white-space: normal; }', '', function(opts) {
        console.log("Entered personal-lists.")

        this.on('mount'), function(){
            console.log('personal-lists mounted')
        }

        var original_user = null

        opts.usersCallBack(this)

        this.on('users_loaded', function(peeps) {
            opts.people = peeps
            this.update()
            $('.task-list').sortable({
                placeholder: 'task-placeholder',
                connectWith: '.task-list',
                start: function(event, ui) {
                    console.log("Drag started.")
                    original_user = $(ui.item).parent().attr('id')

                    $(ui.item).addClass('currently-being-dragged')
                },
                stop: function(event, ui) {
                    $(ui.item).removeClass('currently-being-dragged')
                    console.log("Drag stopped.")
                    let new_user = $(ui.item).parent().attr('id')
                    console.log("original user: %s", original_user)
                    console.log("new user: %s", new_user)
                    if (new_user != original_user) {
                        let task_id = $(ui.item).attr('id').split(',')[1]
                        console.log("task id: %s", task_id)

                        TASKMANAGER.api.replace_user_on_task(task_id, original_user, new_user)
                    }
                }
            })
        })

        $(document).ready(function() {
            $(document).on("click", ".task-description-toggle", function(event){
                $(event.target).parent().siblings(".task-description").toggle();
            });
        });

});
