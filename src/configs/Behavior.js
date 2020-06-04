const generateId = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

class Behavior {
    uuid = generateId()
    userId
    bookId
    tagIds
    action
    page

}