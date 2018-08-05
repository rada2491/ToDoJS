var add_todo_btn = document.getElementById('add-btn');
var todo_input = document.getElementById('todo-list');
var list = document.getElementById('list');
add_todo_btn.addEventListener('click', () => {
    var todo = todo_input.value;

    var item = document.createElement('div');
    item.classList.add('item');

    var item_text = document.createElement('div');
    item_text.classList.add('item-text');
    if (todo != '') {
        item_text.textContent = todo;

        var action_btns = document.createElement('div');
        action_btns.classList.add('action-btns');

        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');

        var remove_btn = document.createElement('button');
        remove_btn.classList.add('action-btn');
        remove_btn.classList.add('remove-btn');
        remove_btn.textContent = 'Remove';

        remove_btn.addEventListener('click', () => {
            if (checkBox.checked) {
                item.parentNode.removeChild(item);
            } else {
                alert('The task is in progress');
            }
        });

        action_btns.append(remove_btn);
        action_btns.append(checkBox);
        item.append(item_text);
        item.append(action_btns);
        list.append(item);

        todo_input.value = '';
    } else {
        alert('Task is empty');
    }


})