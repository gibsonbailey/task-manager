var TASKMANAGER = {}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        xhr.setRequestHeader("X-CSRFToken", Cookies.get('csrftoken'));
    }
});

TASKMANAGER.api = {
    request: function(method, url, data, success) {
        return $.ajax({
            type: method,
            url: url,
            data: JSON.stringify(data),
            success: success,
            contentType: "application/json",
            dataType: 'json'
        });
    },

    create_user: function(username, email) {
        var data = {
            username: username,
            email: email
        }
        function success(data) {
            console.log("Successfully created user.")
        }
        return TASKMANAGER.api.request("POST", "/api/users/", data, success)
    },

    create_task: function(title, description, end_date, username) {
        var data = {
            title: title,
            description: description,
            end_date: end_date,
            username: username
        }
        function success(data) {
            console.log("Successfully created task.")
        }
        return TASKMANAGER.api.request("POST", "/api/tasks/", data, success)
    },

    replace_user_on_task: function(task_pk, old_user_pk, new_user_pk) {
        function success_get(task) {
            old_user_pk = JSON.parse(old_user_pk)
            new_user_pk = JSON.parse(new_user_pk)
            console.log(["task.users before:",task.users])
            if (task.users.includes(old_user_pk) && !task.users.includes(new_user_pk)) {
                let i = task.users.indexOf(old_user_pk)
                task.users.splice(i, 1, new_user_pk)
                console.log(["task.users after:",task.users])
                function success(data) {
                    console.log("Successfully replaced user on task.")
                }
                console.log(["Replacing user " + old_user_pk + " with " + new_user_pk + " on task:", task])
                console.log("/api/tasks/" + task_pk + '/')
                return TASKMANAGER.api.request("PUT", "/api/tasks/" + task_pk + '/', task, success)
            }
        }
        console.log(["Replacing user on task:", task_pk])
        
        TASKMANAGER.api.request("GET", "/api/tasks/" + task_pk, null, success_get)
    },
}

