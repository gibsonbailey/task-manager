riot.tag2('gantt', '<div class="gantt-chart-container"> <div class="gantt-chart-content"> <div class="gantt-chart-header"> <div class="gantt-chart-header-title center-content"> <p>Developers</p> </div> <div class="gantt-chart-header-schedule"> <div class="gantt-chart-header-schedule-list scroll-fix"> <div each="{date in opts.layout_dates}" class="gantt-chart-header-schedule-date center-content"> <p>{date.str}</p> </div> </div> </div> </div> <div class="gantt-users-container"> <div each="{person in opts.people}" class="gantt-user-container"> <div class="gantt-user-list"> <div class="gantt-user-header center-content"> <h4>{person.username}</h4> </div> <div class="gantt-user-list-tasks"> <div each="{task in person.tasks}" class="gantt-user-list-task task center-content"> <p>{task.title}</p> </div> </div> </div> <div class="gantt-user-schedule"> <div class="gantt-user-header center-content"> <div class="range-control"> <div class="range-bar"></div> <div class="range-bar"></div> </div> <div class="gantt-task-schedule"> <div each="{task, i in person.tasks}" riot-style="margin-top: 15px; margin-left: {task.date_offset * 0.1}px; width: {task.date_duration * 0.1}px; background: {opts.color_palette[i % opts.color_palette.length].background}; border: solid 2px {opts.color_palette[i % opts.color_palette.length].border};" class="task-bar"> </div> </div> </div> <div class="gantt-task-schedule-container scroll-fix"> <div each="{task, i in person.tasks}" class="gantt-task-schedule"> <div each="{date in opts.layout_dates}" class="gantt-schedule-task-area-cell task center-content"> <p></p> </div> <div riot-style="margin-left: {task.date_offset}px; width: {task.date_duration}px; background: {opts.color_palette[i % opts.color_palette.length].background}; border: solid 2px {opts.color_palette[i % opts.color_palette.length].border};" class="task-bar"> </div> </div> </div> </div> </div> </div> </div> </div>', 'gantt .gantt-chart-container,[data-is="gantt"] .gantt-chart-container{ display: flex; width: 100%; height: 100%; justify-content: center; align-items: center; } gantt .gantt-chart-content,[data-is="gantt"] .gantt-chart-content{ display: flex; flex-direction: column; width: 95%; height: 95%; background: #ddd; border-radius: 8px; } gantt .gantt-chart-header,[data-is="gantt"] .gantt-chart-header{ display: flex; width: 100%; height: 80px; } gantt .gantt-chart-header-title,[data-is="gantt"] .gantt-chart-header-title{ display: flex; width: 25%; align-items: center; } gantt .gantt-chart-header-schedule,[data-is="gantt"] .gantt-chart-header-schedule{ display: flex; width: 75%; } gantt .gantt-chart-header-schedule-list,[data-is="gantt"] .gantt-chart-header-schedule-list{ display: flex; width: 100%; } gantt .gantt-chart-header-schedule-date,[data-is="gantt"] .gantt-chart-header-schedule-date{ display: flex; border: solid 1px #ccc; align-items: center; } gantt .gantt-users-container,[data-is="gantt"] .gantt-users-container{ display: flex; flex-direction: column; } gantt .gantt-user-container,[data-is="gantt"] .gantt-user-container{ display: flex; } gantt .gantt-user-list,[data-is="gantt"] .gantt-user-list{ display: flex; flex-direction: column; width: 25%; border-right: solid 2px #ddd; background: #eee; } gantt .gantt-user-header,[data-is="gantt"] .gantt-user-header{ display: flex; height: 60px; border-bottom: solid 2px #ddd; border-top: solid 2px #ddd } gantt .task,[data-is="gantt"] .task{ height: 30px; } gantt .task-bar-container,[data-is="gantt"] .task-bar-container{ position: relative; } gantt .task-bar,[data-is="gantt"] .task-bar{ position: absolute; border-radius: 5px; height: 22px; margin-top: 4px; } gantt .range-control,[data-is="gantt"] .range-control{ display: flex; justify-content: space-between; background: rgb(0, 0, 0, 0.1); height: 60px; width: 50px; margin-left: 0; overflow: hidden; border-radius: 3px; } gantt .range-bar,[data-is="gantt"] .range-bar{ display: flex; height: 100%; background: rgb(80, 80, 80, 0.9); width: 10px; } gantt .gantt-user-list-tasks,[data-is="gantt"] .gantt-user-list-tasks{ display: flex; flex-direction: column; } gantt .gantt-user-list-task,[data-is="gantt"] .gantt-user-list-task{ display: flex; } gantt .gantt-user-schedule,[data-is="gantt"] .gantt-user-schedule{ display: flex; flex-direction: column; width: 75%; background: #fff; } gantt .gantt-task-schedule-container,[data-is="gantt"] .gantt-task-schedule-container{ position: relative; } gantt .gantt-task-schedule,[data-is="gantt"] .gantt-task-schedule{ display: flex; flex-direction: row; width: 100%; height: 30px; } gantt .gantt-schedule-task-area-cell,[data-is="gantt"] .gantt-schedule-task-area-cell{ display: flex; border: solid 1px #eee; } gantt .scroll-fix,[data-is="gantt"] .scroll-fix{ overflow-x: auto; } gantt .scroll-fix::-webkit-scrollbar,[data-is="gantt"] .scroll-fix::-webkit-scrollbar{ display: none; } gantt .center-content,[data-is="gantt"] .center-content{ align-items: center; justify-content: center; } gantt h4,[data-is="gantt"] h4{ text-align: center; min-width: 120px; margin: 0; } gantt p,[data-is="gantt"] p{ text-align: center; min-width: 120px; margin: 0; }', '', function(opts) {

        var color_palette = [
            {
                border: 'rgba(141, 153, 174, 0.8);',
                background: 'rgba(141, 153, 174, 0.18);',
            },
            {
                border: 'rgba(24, 44, 65, 0.8);',
                background: 'rgba(24, 44, 65, 0.18);',
            },
            {
                border: 'rgba(130, 51, 41, 0.8);',
                background: 'rgba(130, 51, 41, 0.18);',
            },
            {
                border: 'rgba(234, 222, 218, 0.8);',
                background: 'rgba(234, 222, 218, 0.18);',
            },
            {
                border: 'rgba(191, 184, 173, 0.8);',
                background: 'rgba(191, 184, 173, 0.18);',
            },
        ];

        function dateDiffInDays(a, b) {
            const _MS_PER_DAY = 1000 * 60 * 60 * 24;

            const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

            return Math.floor((utc2 - utc1) / _MS_PER_DAY);
        }

        function min_and_max_date(users) {
            let min = new Date(2200, 11, 25);
            let max = null;
            for(let i = 0; i < users.length; i++) {
                let tasks = users[i].tasks
                for(let j = 0; j < tasks.length; j++) {
                    let ts = new Date(tasks[j].start_date)
                    let te = new Date(tasks[j].end_date)

                    if(te > max) {
                        max = te;
                    }
                    if(ts < min) {
                        min = ts;
                    }
                }
            }
            console.log(['max', max])
            return {
                min: min,
                max: max
            }
        };

        opts.usersCallBack(this)

        this.on('mount', function() {
            console.log('gantt mounted.')
        })

        this.on('users_loaded', function(user_data) {
            console.log('user_data loaded.')

            function assign_date_formats(minimum_date) {
                for(let i = 0; i < user_data.length; i++) {
                    for(let j = 0; j < user_data[i].tasks.length; j++) {
                        user_data[i].tasks[j].date_offset = (1 + dateDiffInDays(minimum_date, new Date(user_data[i].tasks[j].start_date))) * 122
                        user_data[i].tasks[j].date_duration = (1 + dateDiffInDays(new Date(user_data[i].tasks[j].start_date), new Date(user_data[i].tasks[j].end_date))) * 122
                    }
                }
            }

            const minimum_date = min_and_max_date(user_data).min
            const maximum_date = min_and_max_date(user_data).max
            assign_date_formats(minimum_date)

            var layout_dates = []
            for(let i = 0; i < dateDiffInDays(minimum_date, maximum_date) + 2; i++) {
                let d = new Date(minimum_date.getTime())
                d.setDate(minimum_date.getDate() + i)
                layout_dates.push({
                    str: d.toString().slice(3,10),
                })
            }
            opts.layout_dates = layout_dates
            opts.people = user_data
            opts.color_palette = color_palette
            console.log(user_data)
            this.update()

            var scroll_fix = $('.scroll-fix')

            scroll_fix.scroll( function() {
                scroll_fix.scrollLeft( $(this).scrollLeft())
            })

            var w_control_container = $('.gantt-task-schedule').width()
            var w_day_cell = $('.gantt-schedule-task-area-cell').outerWidth()
            var days = dateDiffInDays(minimum_date, maximum_date) + 1
            var w_schedule_container = w_day_cell * days
            var days_on_screen = w_control_container / w_day_cell
            console.log(w_control_container)
            console.log(w_schedule_container)

            const range_controller = $('.range-control')[0]
            const range_container = $(range_controller).parent()[0]
            console.log(range_controller)
            console.log(range_container)
            let start_down = false
            let end_down = false
            let container_left_position = range_container.offsetLeft
            let scrollLeft
            let startX

            range_controller.addEventListener('mousedown', function (e) {
                start_down = true
                startX = e.pageX - range_container.offsetLeft

            })

            range_controller.addEventListener('mouseleave', function (e) {
                start_down = false
            })

            range_controller.addEventListener('mouseup', function (e) {
                start_down = false
            })

            range_controller.addEventListener('mousemove', function (e) {
                if (!start_down) {
                    return
                }
                let x = e.pageX - range_container.offsetLeft
                let dx = (x - startX)
                range_controller.style.marginLeft = dx
                console.log(dx)
            })
        })

        $(document).on("scroll", ".scroll-fix", function(event){
            $('.scroll-fix')
        });
});
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
