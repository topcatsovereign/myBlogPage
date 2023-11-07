//LIGHT/DARK MODE
const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('change', function(){
    if (toggle.checked){
        body.classList.add('dark');
    }else {
        body.classList.remove('dark');
    }
})



//CONTENT EDITING

document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var postTitle = document.getElementById('postTitle').value;
    var postAuthor = document.getElementById('postAuthor').value;
    var postContent = document.getElementById('postContent').value;

    var displayContent = document.getElementById('displayContent');

    var newContent = document.createElement('div');
    newContent.innerHTML = `<h2>${postTitle}</h2><cite>by ${postAuthor}</cite><p>${postContent}</p>`;

    displayContent.insertBefore(newContent, displayContent.firstChild);

    // Clear the form after submission
    document.getElementById('postForm').reset();
});